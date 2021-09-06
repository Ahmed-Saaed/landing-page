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
const myNavList = document.getElementById("navbar__list");
let main = document.querySelector('MAIN').children;
console.log (main[1].getAttribute("id"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// gettin the number of my sections 


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 0 ; i < main.length-1 ;  i++) {
  let navItem = document.createElement('li');
  navItem.innerHTML = main[i+1].getAttribute('id');
  navLink = document.createElement("a")
  navLink.setAttribute('href' , main[i+1].getAttribute('id'));
  navItem.appendChild(navLink)
  myNavList.appendChild(navItem)
  console.log(navItem)
}
console.log(myNavList.children)

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


