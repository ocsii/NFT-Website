const faqH = document.querySelectorAll(".faq-container .faq-header"); //Store all content from faq-header in faqH

faqH.forEach((header, index) => {   //For each loop through faqH list     // => Callback function for each header (variable assigned to each value of list with index)

    header.addEventListener("click", () => {    // Check for the event of "click" on the header
        header.nextElementSibling.classList.toggle("activeFaq");       // Targer the next sibling element and toggle class .active on it

        const open = header.querySelector(".open"); //Select all .open classes within the HEADER ONLY
        const close = header.querySelector(".close");

        // Check if content is active or not 

        
        if (header.nextElementSibling.classList.contains("activeFaq")) { //If any of the content of the headers contain active then remove .active from open and add to close
            open.classList.remove("activeFaq");

            close.classList.add("activeFaq");
        } 
        else {  
            open.classList.add("activeFaq");
            close.classList.remove("activeFaq");
        }
    });
});