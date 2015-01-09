// set default heights and widths for iframes
var default_width = 960;
var default_height = 749;
var default_doc_height = 300;
var default_ratio = default_width / default_height;

// Load the header
$(function() { $("#header").load("../header.html"); });

// Adjust iframe width on load
$(document).ready(function() {
	resizeFrames();
});

//Adjust iframe width on resize
$(window).resize(function() {
	resizeFrames();
});

// update iframe width and height
function resizeFrames() {
	
	var iframe_ratio = default_width / default_height;		// needed to calculate an updated height
	var win_width = $(window).width();
	var iframes = document.getElementsByTagName("iframe");
	
	// if the window is between 100 and default_width pixels > update
	if(win_width<default_width && win_width>100) {
		
		// for each iframe, calculate and set a new width and height
		for(var i=0; i<iframes.length; i++) {
			var updated_width = win_width - 50;
			var updated_height = updated_width / default_ratio;

			var iframe = iframes[i];
			var iclass = iframe.className;
			
			iframe.setAttribute("width", updated_width);
			if(iclass==="slidedeck") {
				iframe.setAttribute("height", updated_height);
			}
			else if(iclass==="doc"){
				iframe.setAttribute("height", default_doc_height);
			}
		}
	}
	
	// otherwise set defaults
	else {
		for(var i=0; i<iframes.length; i++) {
			var iframe = iframes[i];
			var iclass = iframe.className;
			
			iframe.setAttribute("width", default_width);
			if(iclass==="slidedeck") {
				iframe.setAttribute("height", default_height);
			}
			else if(iclass==="doc"){
				iframe.setAttribute("height", default_doc_height);
			}
		}
	}
}