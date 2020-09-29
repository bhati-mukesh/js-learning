//  set initial count 
let count = 0

// select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        // console.log(e.target.classList)
        // console.log(e.currentTarget.classList)
        let styles = e.target.classList
        if(styles.contains("decrease")){
            count--;
        }else if (styles.contains("increase")){
            count++;
        }else{
            count = 0
        }
        if(count > 0 ){
            value.style.color = "green"
        }
        if(count < 0 ){
            value.style.color = "red"
        }
        if(count ==0 ){
            value.style.color = "black"
        }
        value.textContent = count
    })
})
