// Text to be typed
var text = "Full-Stack Python Developer";
var index = 0;
var speed = 100; // Adjust typing speed (milliseconds) - increased for slower typing

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // After typing is complete, you may choose to start over or stop typing
        // Here is where you may reset the index and clear the typed text
        // index = 0;
        // document.getElementById("typing-text").innerHTML = "";
    }
}

// Start the typing animation when the page loads
window.onload = function() {
    typeWriter();
};

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