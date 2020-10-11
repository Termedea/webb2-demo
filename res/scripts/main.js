/*** Bibliotek ***/


/*** Variabler ***/
var navMainMenu = document.querySelector("nav.main-menu");
var scrollClass = "scrolled";


window.addEventListener('scroll', throttle(scrolling, 100));


/** Ändrar utseende på menyn efter viss scroll **/
function scrolling() {

    if (window.scrollY > 100) {
        navMainMenu.classList.add(scrollClass);

    } else {
        navMainMenu.classList.remove(scrollClass);
    }
}

/* Lånad funktion för att vi inte ska behöva anropa vår eventhanterare varje gång någon scrollar*/
/* function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
} */

function throttle(callback, limit) {
    var waiting = false; // Initially, we're not waiting
    return function() { // We return a throttled function
        if (!waiting) { // If we're not waiting
            callback.apply(this, arguments); // Execute users function
            waiting = true; // Prevent future invocations
            setTimeout(function() { // After a period of time
                waiting = false; // And allow future invocations
            }, limit);
        }
    }
}