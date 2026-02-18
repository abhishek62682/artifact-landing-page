const menu = document.querySelector("#hamburger");
const slideMenuFrame = document.querySelector(".slide-menu-frame ")
menu.addEventListener("click", function (event){

    slideMenuFrame.classList.toggle("active")

})