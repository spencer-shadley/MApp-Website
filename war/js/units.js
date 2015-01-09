// Load the header
$(function() { $("#header").load("../header.html"); });

// Adjust iframe width on load and resize
$(document).ready(function() {
	resizeFrames();
});
$(window).resize(function() {
	resizeFrames();
});

function resizeFrames() {
	var win_width = $(window).width();
	if(win_width < 900) {
		var iframes = document.getElementsByTagName("iframe");
		for(var i=0; i<iframes.length; i++) {
			iframes[i].setAttribute("width", win_width - 50);
		}
	}
}