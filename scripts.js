//THIS IS THE EXAMPLE CODE FROM DEMO
/*1.select the ham icon <whats clicked on.
const hamburgerIcon = document.querySelector('.menu');

//2.write the event handler to show hide the menu 
const toggleMenu = function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

//3.use addeventListener to attach hamburger icon to the event Handler
hamburgerIcon.addEventListener('click', toggleMenu);