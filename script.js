// Text to be typed
var text = "A Full-Stack Python Developer";
var index = 0;
var speed = 150; // Adjust typing speed (milliseconds)

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
    } else {
        // Reset index to 0 to start typing again
        index = 0;
        document.getElementById("typing-text").innerHTML = ""; // Clear the text to start over
    }
    setTimeout(typeWriter, speed);
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


