// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mainMenu ul");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  // Do something else, like open/close menu
  // console.log(menu);

});