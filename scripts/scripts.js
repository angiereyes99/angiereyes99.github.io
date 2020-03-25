/*** Javascript for we functionalities ***/

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("separator");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	}
}