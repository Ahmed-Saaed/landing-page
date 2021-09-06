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
let main = document.querySelector('MAIN');
let sections = main.querySelectorAll('MAIN SECTION')

console.log(typeof(sections))
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
for (let i = 0 ; i < sections.length ;  i++) {
  let navItem = document.createElement('li');
  navItem.innerHTML = sections[i].getAttribute('id');
  navLink = document.createElement("a")
  navLink.setAttribute('href' , '#'+sections[i].getAttribute('id'));
  navItem.appendChild(navLink)
  myNavList.appendChild(navItem)
}
let navItems = myNavList.children

console.log(navItems)

// Add class 'active' to section when near top of viewport

for (let j = 0; j < main.length-1; j++){
  if (main[j+1].getBoundingClientRect().top < 100) {
    main.classList.remove("active")
    main[j+1].classList.add("active")
  }
  console.log(main.classList)
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


