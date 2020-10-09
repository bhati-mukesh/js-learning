// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


// edit option
let editElement;
let editFlag = false
let editId = "";

// ****** EVENT LISTENERS **********
console.log(form)
form.addEventListener('submit', addItem)
    // clear item
clearBtn.addEventListener('click',clearItems)
// ****** FUNCTIONS **********
function addItem(event) {
    event.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        console.log('add item')
        const element = document.createElement('article')
        // add class
        element.classList.add("grocery-item");
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;
        const deleteBtn = element.querySelector(".delete-btn")
        const editBtn = element.querySelector(".edit-btn")
        deleteBtn.addEventListener('click',deleteItem)
        editBtn.addEventListener('click',editItem)
        // append child
        list.appendChild(element);
        displayAlert("Item added to list","success")
        // show container
        container.classList.add("show-container")
        addToLocalStoarge(id,value);
        // set back to default
        setBackToDefault();
    }
    else if (value && editFlag) {
        console.log('editing')
    }
    else {
        console.log('empty value')
        displayAlert("Empty Value", "danger")
    }
}

// clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("Empty List","danger");
    setBackToDefault();
    // localStorage.removeItem('list')

}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)
    // remove alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

// edit function
function editItem(e){
    console.log('edit')
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item

}
// delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element)
    if(list.children.length === 0){
        container.classList.remove("show-container")
    }
    displayAlert("Item Deleted","danger")
    setBackToDefault();
    // remove from localstorage
    removeFromLocalStorage(id);
}

// set back to default()
function setBackToDefault(){
    grocery.value = ""
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit"
};
// ****** LOCAL STORAGE **********
function addToLocalStoarge(id,value){

}

function removeFromLocalStorage(id){
    console.log(id)
}
// ****** SETUP ITEMS **********
