var left_header = "Publishing";
var right_header = "Where to go now?";

var leftDesc = "Learn where and how to publish your applications. Oh, and how to make money!";
var rightDesc = "Now that the course is finished, where can you go? Explanation of how to proceed in your future Android development.";

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
		recommend.innerHTML = "Common places to publish applications: <a class='link' target='_blank' href='https://play.google.com/store'>Google Play Store</a>, <a class='link' target='_blank' href='http://www.amazon.com/mobile-apps/b?ie=UTF8&node=2350149011'>Amazon AppStore</a>, <a class='link' target='_blank' href='http://www.barnesandnoble.com/u/nook-apps/379002908'>Barnes and Noble App Store</a>, <a class='link' target='_blank' href='http://slideme.org/'>SlideME</a>, <a class='link' target='_blank' href='http://developer.gomonetworks.com/android/'>GetJar</a>, <a class='link' target='_blank' href='http://www.appia.com/'>Appia</a>";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 6", unit6Title, [recommend]);
	
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
	makeFrame(content, "Where to Publish", "https://docs.google.com/presentation/d/178tnTIG9hbTaaCuhPNOmvzp47J0vRNj1J5w0ECzABro/embed?start=false&loop=false&delayms=5000");
	makeFrame(content, "How to Publish on the Google Play Store", "https://docs.google.com/presentation/d/1-DudRgopt1v8Z8s1aQVdHuJHmiO1ckLlrQ9oSb-b9KM/embed?start=false&loop=false&delayms=5000");
	makeFrame(content, "How to Make Money", "https://docs.google.com/presentation/d/1gKNsMNRwxl_O_hB8p77oAUT1nw3jKVH-ndJlnflr0oY/embed?start=false&loop=false&delayms=5000");
	
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
	
	// insert explanation
	var exp = document.createElement("p");
		exp.id = "section_description";
		exp.innerHTML = "Congratulations! You have completed the entire course! You're awesome! Now that the course is finished you have the expertise to build incredible applications. Feel free to come back for references when you cannot remember how to do something specific or try taking a look at the <a class='link' target='_blank' href='../html/resources.html'>resources page</a>. You can also try taking a look at the about page to see things like the code for this website (maybe it's time to learn to develop web apps)!<br><br>Have fun :)";
	content.appendChild(exp);

	// underline title
	leftTitle.innerHTML = left_header;
	rightTitle.innerHTML = "<u>" + right_header + "</u>";
	
	// update button text
	leftBtn.innerHTML = bUnclicked;
	rightBtn.innerHTML = bClicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}