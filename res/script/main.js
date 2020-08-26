/*** Bibliotek ***/
var throttle = require("lodash/throttle");
//Vet inte om vi behöver det, men det kan vara bra att ha. 
var $ = require("jquery");

/*** Variabler ***/
var navMainMenu = $("nav.main-menu");
var scrollClass = "scrolled";


/* Events */
$(window).scroll(throttle(scrolling, 300)); //Anropar funktionen "scrolling" varje 200:e ms (skit i throttle, det är något smart som någon annan har gjort)


/*** Egna funktioner ***/

/** Ändrar utseende på menyn efter viss scroll **/
function scrolling() {
    if (window.scrollY > 100) {
        navMainMenu.addClass(scrollClass);

    } else {
        navMainMenu.removeClass(scrollClass);
    }
}
