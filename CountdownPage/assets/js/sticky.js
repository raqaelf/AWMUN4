window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbars");
var sticky = navbar.offsetTop + 10;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
