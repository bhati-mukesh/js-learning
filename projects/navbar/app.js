// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navtoggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navtoggle.addEventListener('click',function(){
    // console.log(links.classList)
    // console.log(links.classList.contains("random"))
    console.log(links.classList.contains("show-links"))
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }else{
    //     links.classList.add("show-links")
    // }
    links.classList.toggle("show-links")
    console.log('click')

})