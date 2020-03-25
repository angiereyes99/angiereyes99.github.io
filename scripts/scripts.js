/*** Javascript for we functionalities ***/

window.onscroll = function() { myFunction() };

var navbar = document.getElementByID("separator");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}