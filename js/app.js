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
const start = performance.now()
const myNavList = document.getElementById('navbar__list');
let main = document.querySelector('MAIN');
let sections = main.querySelectorAll('MAIN SECTION')
const btn = document.getElementById("btn")



// build the nav
function buildNav () {
for (let i = 0 ; i < sections.length ;  i++) {
  let navItem = document.createElement('li');
  navLink = document.createElement('a')
  navLink.innerHTML = sections[i].getAttribute('data-nav');
  navLink.setAttribute('href' , '#'+sections[i].getAttribute('id'));
  navItem.appendChild(navLink)
  myNavList.appendChild(navItem)
}
}

buildNav ()

// get the anchors in array to use it in the event

let navItems = myNavList.children;
let navAnchors = [];

for (anchor of navItems) {
  navAnchors.push(anchor.children[0])
};


// Add class 'active' to section and to the nav when near top of viewport

let addActive = function(){
for (const section of sections) {
  if (section.classList.contains('active')) {
      section.classList.remove('active');
  }
}
for (const section of sections) {
  if (section.getBoundingClientRect().top > -1) {
    section.classList.add('active');
  }
  };
};

 // Begin Events

// Add class 'active' to section when near top of viewport event 

window.addEventListener('scroll' , addActive)

// Set sections as active on click

for (const anch of navAnchors){
anch.addEventListener('click', addActive
)
}

// to top button 
window.onscroll = function(){
  if (sections[2].getBoundingClientRect().top < 1000 ){
    btn.style.display="block"
  }else{
    btn.style.display="none"
  };
}

btn.addEventListener('click',function(){
  window.scrollTo (0 , 0)
});

// hide the nav bar after scrolling

window.addEventListener('scroll',function(){
  if((sections[0].getBoundingClientRect().top < 1000 ))
  this.setTimeout(function(){
    myNavList.style.display = "none"
  },5000)
})

const end = performance.now()