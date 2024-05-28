var texts = ["A Web Designer", "A Front-End Developer", "A Back-End Developer", "A Full-Stack Developer", "A Mobile Application Developer"];
var textIndex = 0;
var index = 0;
var speed = 150; // Adjust typing speed (milliseconds)
var isDeleting = false; // State variable to track the direction of typing

function typeWriter() {
    var currentText = texts[textIndex];

    if (!isDeleting) {
        // Typing forward
        if (index < currentText.length) {
            document.getElementById("typing-text").innerHTML += currentText.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            // Finished typing forward, start deleting
            isDeleting = true;
            setTimeout(typeWriter, speed + 500); // Pause before deleting
        }
    } else {
        // Deleting backward
        if (index > 0) {
            document.getElementById("typing-text").innerHTML = currentText.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, speed / 2); // Faster speed for deleting
        } else {
            // Finished deleting, move to the next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            index = 0;
            setTimeout(typeWriter, speed + 500); // Pause before typing the next text
        }
    }
}

// Start the typing animation when the page loads
window.onload = function() {
    typeWriter();
};



//active links
var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


