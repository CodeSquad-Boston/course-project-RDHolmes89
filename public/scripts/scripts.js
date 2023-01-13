//1. Select the ham icon <whats clicked on.

 const hamburger = document.querySelector('.hamburger-head');

 //2. Write the event handler to show hide the menu 
 const ToggleDat = function() {
     const nav = document.querySelector('nav');
     nav.classList.toggle('open');
 }

 //3. Use addeventListener to attach hamburger icon to the event Handler
 hamburger.addEventListener('click', ToggleDat);
 
 //HOMEWORK 9 INFO
 const comicBooks = [

    {

        title: "Fun Home: A Family Tragicomic",

        author: "by Alison Bechdel",

        rating: "5 stars",

        href: "./fun-home.+html",

        imgSrc: "./public/images/fun-home.jpg",

        imgAlt: "Fun Home: A Family Tragicomic comic book cover",

    },

    {

        title: "Hunter X Hunter Vol. 1",

        author: "by Yoshihiro Togashi",

        rating: "5 stars",

        href: "./hunter-x-hunter.html",

        imgSrc: "./public/images/hunter-x-hunter.jpg",

        imgAlt: "Hunter X Hunter comic book cover",

    },

    {

        title: "The Walking Dead, Vol. 1: Days Gone Bye",

        author: "by Robert Kirkman",

        rating: "4 stars",

        href: "./the-walking-dead.html",

        imgSrc: "./public/images/the-walking-dead.jpg",

        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",

    }

]
// console.log(comicBooks[0]);
// STILL FIGURING OUT FUNCTION//
//USE A FOR LOOP FOR THIS INSTEAD OF THIS ROCHELLE!////THEN TEST ONCE CSS PATHS ARE CORRECTED IN HTML PAGE FILES//
const displayMore = function() {
    const moreComics = document.getElementById('#showMoreComics');
    moreComics.comicBooks.appendChild;
    moreComics.comicBooks[0].appendChild;
    moreComics.comicBooks[1].appendChild;
    moreComics.comicBooks[2].appendChild;


    
}

// Clearing the comics that are displayed?
// document.querySelector('#showMoreComics').value = '';

//THIS IS THE LAST STEP ADDING THE EVENTLISTENER//
comicBooks.addEventListener('click', displayMore);

