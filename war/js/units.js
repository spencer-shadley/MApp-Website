/** iFrame Setup **/
// set default heights and widths for iframes
var default_width = 960;
var default_height = 749;
var default_doc_height = 300;
var default_ratio = default_width / default_height;

// Adjust iframe dimensions on load
$(document).ready(function() {
	$("#header").load("../header.html"); 	// load the header
	resizeFrames();							// initial iframe sizing
});

//Adjust iframe dimensions on resize
$(window).resize(function() {
	resizeFrames();
});

// update iframe width and height
function resizeFrames() {
	
	var iframe_ratio = default_width / default_height;		// need to calculate an updated height
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

// Handle all requests to load new Intro Pages
function open_intro_handler(page) {

	// load the new section
	$("#content").load("../html/tutorial-intro-"+ page + ".html");
	
	 // update frame sizes
	 resizeFrames();
	
	 // update buttons' text
	 document.getElementById("t-intro-ow-bt").innerHTML = bunclicked;
	 document.getElementById("t-intro-gs-bt").innerHTML = bunclicked;
	 document.getElementById("t-intro-qz-bt").innerHTML = bunclicked;
	 document.getElementById("t-intro-"+page+"-bt").innerHTML = bclicked;

	 // update headers' text
	 document.getElementById("t-intro-ow-h").innerHTML = ow_header;
	 document.getElementById("t-intro-gs-h").innerHTML = gs_header;
	 document.getElementById("t-intro-qz-h").innerHTML = qz_header;
	
	// update headers' text
	switch(page) {
		case "ow": 
			document.getElementById("t-intro-ow-h").innerHTML = "<u>" + ow_header + "</u>";
			break;
		case "gs": 
			document.getElementById("t-intro-gs-h").innerHTML = "<u>" + gs_header + "</u>";
			break;
		case "qz": 
			document.getElementById("t-intro-qz-h").innerHTML = "<u>" + qz_header + "</u>";
			break;
		default:
			alert("Unfortunately, something went wrong processing your page request. Please try again");
			break;
	}
}

function makeSectionTitle(content, title) {
	var secTitle = document.createElement("h1");
		secTitle.id = "section_title";
		secTitle.innerHTML = "<u>" + title + "</u>";
	content.appendChild(secTitle);
}

function makeSectionDesc(content, desc) {
	var secDesc = document.createElement("p");
		secDesc.id = "section_description";
		secDesc.innerHTML = desc;
	content.appendChild(secDesc);
}

function makeFrame(content, title, link) {
	
	// title for the frame
	var frameTitle = document.createElement("h3");
		frameTitle.className = "frame_title";
		frameTitle.innerHTML = title;
	content.appendChild(frameTitle);
	
	// the frame itself
	var frame = document.createElement("iframe");
		frame.className = "slidedeck";
		frame.frameBorder = 0;
		frame.width = default_width;
		frame.height = default_height;
		frame.src = link;
	content.appendChild(frame);
}

function makeDoc(content, title, link) {
	
	// remove embedding from the link
	var embed = "?embedded=true";
	var linkNoEmbed;
	if(link.indexOf(embed) > -1) {
		var embedStartIndex = link.indexOf(embed);
		var embedEndIndex = embedStartIndex + embed.length;
		linkNoEmbed = 	link.substring(0, embedStartIndex) + 
						link.substring(embedEndIndex);
	} else {
		linkNoEmbed = link;
	}
	
	// title for the doc
	var frameTitle = document.createElement("h3");
		frameTitle.className = "frame_title";
		frameTitle.innerHTML = "<a class='link' target='_blank' href='" + link + "'>" + title + "</a>";
	content.appendChild(frameTitle);
	
	// the doc itself
	var frame = document.createElement("iframe");
		frame.className = "doc";
		frame.frameBorder = 0;
		frame.width = default_width;
		frame.height = default_doc_height;
		frame.src = link;
	content.appendChild(frame);
}

// Make the top portion of each unit page (unit title, description, line, etc.)
function makeTopPage(div, unitTitle, unitDesc, aux) {
	
	// clear the div
	removeChildren(div);
	
	// title of the unit (Unit 1)
	var title = document.createElement("h1");
		title.id = "unit_title";
		title.innerHTML = "<u>" + unitTitle + "</u>";
	div.appendChild(title);
		
	// description of unit (introduction to Android)
	var desc = document.createElement("h2");
		desc.id = "unit_descript";
		desc.innerHTML = unitDesc;
	div.appendChild(desc);
	
	// extra tags to insert before line (recommendation)
	for(var i=0; i<aux.length; i++)
		div.appendChild(aux[i]);
	
	// dividing line to separate top portion from rest of page (____)
	var line = document.createElement("hr");
		line.id = "dividing_line";
	div.appendChild(line);
}

// miscellaneous functions to complete before loading page content
function startPageMisc(content) {
	
	// initially clear the div (content)
	/*while(content.hasChildNodes())
		content.removeChild(content.lastChild);*/
	removeChildren(content); 
	
	 // scroll to top of page
	 document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// remove all underlying children from an element
function removeChildren(toRemove) {
	if(toRemove) // make sure toRemove is not null
		while(toRemove.hasChildNodes())
			toRemove.removeChild(toRemove.lastChild);
}

//miscellaneous functions to complete after loading page content
function finishPageMisc() {
	
	/*var iframes = document.getElementsByTagName("iframe");
	for(var i=0; i<iframes.length; i++) {
		var iframe = iframes[i];
		iframe.width = default_width;
		iframe.height = default_height;
	}*/
}