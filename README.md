# Frontend Mentor - FAQ acordion Solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## OVERVIEW
### The Challenge

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## SCREENSHOT
## LINKS
## BUILT WITH 

- HTML5
- CSS
- FlexBox
- Mobile-First  workflow
- Vanilla Javascript

## WHAT I LEARNED
- I got better using the CSS Trasform property, Javascript ClassList, get access to the parent of an element from Javascript.

`````` JS
let clicked = (button.parentElement).parentElement

if (clicked.classList.contains('active')){
            button.style.background="url(/assets/images/icon-minus.svg)";
            paragraph.style.opacity=1;
           }
           else{
            button.style.background="url(/assets/images/icon-plus.svg)";
            paragraph.style.opacity=0;

           }
``````
## USEFUL RESOURCES

-[W3schools] (https://www.w3schools.com/)
-[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)

-These is helped me to understand my css and JS when i encountered problemsand also got introduced to some new methods that proved useful while tackling this problem. 

## AUTHOR
- Frontend Mentor - [@Okpgift](https://www.frontendmentor.io/profile/Okpgift)
- Twitter -[@H3ll0Kade] (https://twitter.com/H3ll0Kade)
