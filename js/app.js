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

console.log(sections)
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
  navLink = document.createElement("a")
  navLink.innerHTML = sections[i].getAttribute('data-nav');
  navLink.setAttribute('href' , '#'+sections[i].getAttribute('id'));
  navItem.appendChild(navLink)
  myNavList.appendChild(navItem)
}
let navItems = myNavList.children;
let navAnchors = [];

for (anchor of navItems) {
  navAnchors.push(anchor.children[0])
}

console.log(navAnchors)


// Add class 'active' to section when near top of viewport

let addActive = function(){
for (const section of sections) {
  if (section.classList.contains("active")) {
      section.classList.remove("active");
  }
}
for (const section of sections) {
  if (section.getBoundingClientRect().top < 1) {
    section.classList.add("active");
  }
  };
};

addActive()
// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
for (const anch of navAnchors){
anch.addEventListener("click",function(){
  console.log(anch.innerHTML)
  for (const section of sections) {
    if (section.getAttribute("data-nav") === anch.innerHTML) {
      section.classList.add("active");
    }
    };
})}


