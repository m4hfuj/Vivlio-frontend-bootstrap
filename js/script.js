/*-----------------------------------*\
  #script.js
\*-----------------------------------*/



/*-------------------------------------*\
  MAKE THE NAVBAR TRANSPARENT AND FIXED
\*-------------------------------------*/
window.onscroll = function() {fixNavbar()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the fixed class to the navbar when you reach its scroll position. Remove "fixed" when you leave the scroll position
function fixNavbar() {
  if (window.scrollY > sticky) {
    navbar.classList.add("navbar-bg-transparent");
    navbar.classList.remove("bg-dark");
  } else {
    navbar.classList.remove("navbar-bg-transparent");
    navbar.classList.add("bg-dark");
  }
}


/*---------------------*\
  MAKE ANIMATION APPEAR 
\*---------------------*/
// Function to handle intersection events
function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
}

// Create an Intersection Observer instance
let observer = new IntersectionObserver(handleIntersect, {
  threshold: 0.4 // Trigger when 10% of the element is visible
});

// Add elements to be observed
document.querySelectorAll('#fade-in-from-left, #fade-in-from-right, #fade-in-from-bottom, #zoom-in').forEach(element => {
  element.classList.remove('appear'); // Add the initial state class
  observer.observe(element); // Start observing the element
});



/*-------------------*\
  This has to be live
\*-------------------*/
// To make the options come up when hovered
const hoverElements = document.querySelectorAll('#content-card');
// Check each content-card
hoverElements.forEach(hoverElement => {
  hoverElement.addEventListener('mouseover', function() {
    hoverElement.classList.add('active');
  });
  hoverElement.addEventListener('mouseout', function() {
    hoverElement.classList.remove('active');
  });
})
