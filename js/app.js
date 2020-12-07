/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Constant sections to hold all the sections
const sections = document.querySelectorAll('section');
// Constant navbarList to hold the unordered list of the navigation bar
const navbarList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * @description Checks if an element is in view or not
 * @param {element} element 
 * @returns {boolean}
 */

const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    const height = rect.height / 2.6
    return (
        rect.top >= -height &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/**
 * @description Build the navigation bar menu 
 */

const buildNavbarMenu = () => {
    navbarList.style.display = "none"
    for (section of sections) {
        const el = document.createElement('li');
        el.innerHTML =
            `<a id="link${section.id.slice(7)}" href="#${section.id}" class="menu__link"}">
                    ${section.dataset.nav} 
                </a>`;
        navbarList.appendChild(el);
        activeLink = false
    }
    navbarList.style.display = "block";
}

// Add class 'active' to section when near top of viewport
/**
 * @description Activate the section in view
 */
const activateSection = () => {
    for (section of sections) {
        const link = document.querySelector("#link" + section.id.slice(7))
        if (isInViewport(section)) {
            section.className = "your-active-class";
            link.className = "active_link";
        } else if (section.className === "your-active-class") {
            section.classList.remove("your-active-class");
            link.className = "menu__link";
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavbarMenu);

// Set sections as active
window.addEventListener("scroll", activateSection);