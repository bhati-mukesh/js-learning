// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalBtn = document.querySelector(".modal-btn")
const modalDisplayDiv = document.querySelector(".modal-overlay")
const closeModalBtn = document.querySelector(".close-btn")

openModalBtn.addEventListener('click',function(){
    console.log('click')
    modalDisplayDiv.classList.add("open-modal")
})

closeModalBtn.addEventListener('click',function(){
    console.log('click 2')
    modalDisplayDiv.classList.remove("open-modal")

})