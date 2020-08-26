/*** Bibliotek ***/
var throttle = require("lodash/throttle");
var debounce = require("lodash/debounce");

/*** Variabler ***/
var navMainMenu = document.querySelector("nav.main-menu");
var scrollClass = "scrolled";
var historyElement = document.querySelectorAll(".history .flex-item");
console.log(historyElement);

/* Events */
window.addEventListener("scroll", throttle(scrolling, 300)); //Anropar funktionen "scrolling" varje 200:e ms (skit i throttle, det är något smart som någon annan har gjort)
historyElement.addEventListener("click", function() {
    console.log("clicked");
});

/*** Egna funktioner ***/

/** Ändrar utseende på menyn efter viss scroll **/
function scrolling() {
    if (window.scrollY > 100) {
        navMainMenu.classList.add(scrollClass);

    } else {
        navMainMenu.classList.remove(scrollClass);
    }
}

/** Kanske gör något kul med diskografi-popup **/

function popup () {
    console.log("clicked");
}