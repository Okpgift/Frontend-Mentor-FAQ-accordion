// Get access to all buttons on the DOM 
//and put them into an array using Query Selector
let buttons = document.querySelectorAll(".btn");





// Looping and adding an EventListner to each button in the array.
buttons.forEach(button=>{



    // adding a click eventListner to each button
    button.addEventListener('click',()=>{




        // Accessing the container holding the Button, Question (h2) and Answer (Paragraph)
        let clicked = (button.parentElement).parentElement;



        // Toggling the class ACTIVE to the Container
            clicked.classList.toggle('active');
            let paragraph=clicked.childNodes[3];




        // Checks if the class ACTIVE is present to determine which 
        // button icon to show and also to set the opacity for the paragraphs.
           if (clicked.classList.contains('active')){
            button.style.background="url(/assets/images/icon-minus.svg)";
            paragraph.style.opacity=1;
           }
           else{
            button.style.background="url(/assets/images/icon-plus.svg)";
            paragraph.style.opacity=0;

           }
                
            });
         
      
    })
