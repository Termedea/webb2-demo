/*** Bibliotek ***/
var throttle = require("lodash/throttle");
var debounce = require("lodash/debounce");

/*** Variabler ***/
var pageSection = document.querySelectorAll(".page-section");
var navMainMenu = document.querySelector("nav.main-menu");
var scrollClass = "scrolled";
var browserHeight = window.innerHeight;

/* Events */
window.addEventListener("scroll", throttle(scrolling, 300)); //Anropar funktionen "scrolling" varje 200:e ms (skit i throttle, det är något smart som någon annan har gjort)
window.addEventListener("resize", debounce(function(){
    browserHeight = window.innerHeight;
}), 333); //Ser till att browserHeight-variabeln uppdateras då och då (skit i debouce, det är något smart som någon annan har gjort)



/*** Egna funktioner ***/
function scrolling() {
    if (window.scrollY > 100) {
        navMainMenu.classList.add(scrollClass);

    } else {
        navMainMenu.classList.remove(scrollClass);
    }
    
        
}

