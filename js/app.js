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
let sections = main.querySelectorAll('MAIN SECTION');
const btn = document.getElementById("btn")

// Add section 
function addSection(){
  const newSec = document.createElement('section')
  let container = document.createElement('div')
  container.setAttribute('class','landing__container')
  const header = document.createElement('h2');
  const para1 = document.createElement('p');
  para1.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum metus faucibus lectus pharetra dapibus. Suspendisse
  potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
  lacinia ex. `
  const para2 = document.createElement('p');
  para2.innerHTML =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum metus faucibus lectus pharetra dapibus. Suspendisse
  potenti. `
  header.innerHTML = `Section ${sections.length+1}`
  newSec.setAttribute('id',`section${sections.length+1}`);
  newSec.setAttribute('data-nav',`Section ${sections.length+1}`);
  newSec.appendChild(container);
  container.appendChild(header);
  container.appendChild(para1);
  container.appendChild(para2)
  main.appendChild(newSec)
}

addSection();

sections = main.querySelectorAll('MAIN SECTION');

// build the nav

function buildNav(){
  let temp = document.createDocumentFragment();
  sections.forEach(item => {
    let navItem = document.createElement('li');
    navLink = document.createElement('a');
    navLink.innerHTML = item.getAttribute('data-nav');
    navLink.setAttribute('href' , '#'+ item.getAttribute('id'));
    navItem.appendChild(navLink);
    temp.appendChild(navItem);
  });
  myNavList.appendChild(temp)
}

buildNav();


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

// scroll to anchor section on click on the nav tab with the same Id

for (anchor of navAnchors) {
  anchor.addEventListener('click', function(event){
    event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
}



// Add class 'active' to section when near top of viewport event 

window.addEventListener('scroll' , addActive)

// Set sections as active on click

for (const anch of navAnchors){
anch.addEventListener('click', addActive
)
}

// to top button 
window.onscroll = () => {
  if (sections[2].getBoundingClientRect().top < 1000 ){
    btn.style.display="block"
  }else{
    btn.style.display="none"
  };
}

btn.addEventListener('click',()=>{window.scrollTo (0 , 0)});

// hide the nav bar after scrolling

/** window.addEventListener('scroll',function(){
  if((sections[0].getBoundingClientRect().top < 1000 ))
  this.setTimeout(function(){
    myNavList.style.display = "none"
  },5000)

  this.clearTimeout(function(){
    myNavList.style.display = "block"
  },10000)
}) */



const end = performance.now()