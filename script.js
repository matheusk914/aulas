window.onscroll = function() {myFunction()};
var menu = document.getElementById("nav-bar");
var main = document.getElementById("main");
function myFunction() {
    console.log(window.scrollY)
    if (window.scrollY > 36) {
        menu.classList.add("sticky");
        main.classList.add("margin");
      } else {
        menu.classList.remove("sticky");
        main.classList.remove("margin");
      }
  }