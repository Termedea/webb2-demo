/*** Variabler ***/
const navMainMenu = document.getElementById("main-menu");
const scrollClass = "scrolled";
const hiddenClass = "hidden";
const visibleClass = "visible";
const mobileClass = "mobile";
const barsClass = "fa-bars";
const closeClass = "fa-times";
const mobileMenuButton = document.getElementById("mobile-button");
var buttonClasses = mobileMenuButton.classList;
const mediumScreenMQ = window.matchMedia("(min-width: 650px)");
var navClasses = navMainMenu.classList;

/*** Eventlyssnare ***/
window.addEventListener("scroll", throttle(scrolling, 100));
mobileMenuButton.addEventListener("click", toggleVisible);
mediumScreenMQ.addEventListener("change", hideMenuForSmallScreens);

init();
/*** Funktioner ***/

function init() {
    hideMenuForSmallScreens();
}

function toggleVisible(e) {
    if (!mediumScreenMQ.matches) {
        if (!navClasses.contains(mobileClass)) navClasses.add(mobileClass);
        if (
            navClasses.contains(hiddenClass) &&
            buttonClasses.contains(barsClass)
        ) {
            navClasses.remove(hiddenClass);
            navClasses.add(visibleClass);
            buttonClasses.add(closeClass);
            buttonClasses.remove(barsClass);
        } else {
            navClasses.add(hiddenClass);
            navClasses.remove(visibleClass);
            buttonClasses.remove(closeClass);
            buttonClasses.add(barsClass);
        }
    }
}
function hideMenuForSmallScreens() {
    if (!mediumScreenMQ.matches) {
        navClasses.add(hiddenClass);
        navClasses.add(mobileClass);
    } else {
        if (navClasses.contains(hiddenClass)) {
            navClasses.remove(hiddenClass);
            navClasses.remove(mobileClass);
        }
    }
}

/* Ändrar utseende på menyn efter viss scroll */
function scrolling() {
    if (window.scrollY > 100) {
        navMainMenu.classList.add(scrollClass);
    } else {
        navMainMenu.classList.remove(scrollClass);
    }
}

/* Lånad funktion för att vi inte ska behöva anropa vår eventhanterare varje gång någon scrollar*/
function throttle(callback, limit) {
    var waiting = false; // Initially, we're not waiting
    return function () {
        // We return a throttled function
        if (!waiting) {
            // If we're not waiting
            callback.apply(this, arguments); // Execute users function
            waiting = true; // Prevent future invocations
            setTimeout(function () {
                // After a period of time
                waiting = false; // And allow future invocations
            }, limit);
        }
    };
}
