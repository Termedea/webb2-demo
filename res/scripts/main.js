/*** Variabler ***/
const navMainMenu = document.getElementById('main-menu');
const scrollClass = 'scrolled';
const hiddenClass = 'hidden';
const mobileClass = 'mobile';
const barsClass = 'fa-bars';
const closeClass = 'fa-times';
const minScroll = 100;
const mobileMenuButton = document.getElementById('mobile-button');
var buttonClasses = mobileMenuButton.classList;
/* Match media är media queries för javascript. */
const mediumScreenMQ = window.matchMedia('(min-width: 650px)');
var navClasses = navMainMenu.classList;

/*** Eventlyssnare ***/
window.addEventListener('scroll', scrolling, 100);
mobileMenuButton.addEventListener('click', toggleVisible);
mediumScreenMQ.addEventListener('change', hideMenuForSmallScreens);

init();
/*** Funktioner ***/

function init() {
    hideMenuForSmallScreens();
}

function toggleVisible(e) {
    if (!mediumScreenMQ.matches) {
        if (
            navClasses.contains(hiddenClass) &&
            buttonClasses.contains(barsClass)
        ) {
            navClasses.remove(hiddenClass);
            buttonClasses.add(closeClass);
            buttonClasses.remove(barsClass);
        } else {
            navClasses.add(hiddenClass);
            buttonClasses.remove(closeClass);
            buttonClasses.add(barsClass);
        }
    }
}
function hideMenuForSmallScreens() {
    if (mediumScreenMQ.matches) {
        navClasses.remove(mobileClass);
    } else {
        navClasses.add(mobileClass);
    }
}

/* Ändrar utseende på menyn efter viss scroll (man får prova sig fram till siffran). */
function scrolling() {
    if (window.scrollY > minScroll) {
        navMainMenu.classList.add(scrollClass);
    } else {
        navMainMenu.classList.remove(scrollClass);
    }
}
