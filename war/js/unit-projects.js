var left_header = "Single Project";
var right_header = "Group Project";

var leftDesc = "Complete authorship of your own Android application awaits. Just go!";
var rightDesc = "Find a couple people, get them to take this course and build an Androd application together!";

var bClicked = "Reload";
var bUnclicked = "Begin";

var leftBtn = document.getElementById("t-left-bt");
var rightBtn = document.getElementById("t-right-bt");

var leftTitle = document.getElementById("t-left-h");
var rightTitle = document.getElementById("t-right-h");

var leftP = document.getElementById("left-desc");
var rightP = document.getElementById("right-desc");

$(document).ready(function() {
	
	// make the top portion of the page
	var recommend = document.createElement("h3");
		recommend.id = "recommendation";
		recommend.innerHTML = "If you are struggling to implement a specific feature check out the <a href='../html/resources.html' target='_blank' class='link'>resources page</a>, maybe a reference will be of help.";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 5", unit5Title, [recommend]);
	
	// set titles for bottom links
	leftTitle.innerHTML = left_header;
	rightTitle.innerHTML = right_header;
	
	// set descriptions for bottom links
	leftP.innerHTML = leftDesc;
	rightP.innerHTML = rightDesc;
});

// create the 'Overview' section
function open_left() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, left_header);
	makeSectionDescCenter(content, leftDesc);
	
	// create the necessary iframes
	makeDocCustomHeight(content, "Single Project", 1100, "https://docs.google.com/document/d/1LipV9Pe1ByfpgAybr0FDytaD9Ko7hgqDeWO_7scmV9A/pub?embedded=true");
	
	// underline title
	leftTitle.innerHTML = "<u>" + left_header + "</u>";
	rightTitle.innerHTML = right_header;
	
	// update button text
	leftBtn.innerHTML = bClicked;
	rightBtn.innerHTML = bUnclicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}

// create the 'Quizzes!' section
function open_right() {
	
	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, right_header);
	makeSectionDescCenter(content, rightDesc);
	
	// create the necessary iframes
	makeDocCustomHeight(content, "Group Project", 1100, "https://docs.google.com/document/d/1KBFpFg5zLu26u1mi7whUghHcrJ74fA5JdCV2-KzwOeY/pub?embedded=true");

	// underline title
	leftTitle.innerHTML = left_header;
	rightTitle.innerHTML = "<u>" + right_header + "</u>";
	
	// update button text
	leftBtn.innerHTML = bUnclicked;
	rightBtn.innerHTML = bClicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}