var left_header = "Widgets Galore!";
var middle_header = "Activities and Layouts";
var right_header = "Quizzes";

var leftDesc = "The title says it all, get ready to explore many new widgets! The widgets that will be explored are: CheckBox, ToggleButton, TextView and EditText.";
var middleDesc = "Get ready to learn about what an Activity is in Android and how to use it in your apps! Afterward, layouts will be explored in more detail with options for learning about AbsoluteLayout, FrameLayout, LinearLayout, RelativeLayout and TableLayout.";
var rightDesc = "Quiz time again! Get ready to see how much you learned about EditText, if statements, TextViews, ToggleButtons and CheckBoxes!";

var bClicked = "Reload";
var bUnclicked = "Begin";

var leftBtn = document.getElementById("t-left-bt");
var middleBtn = document.getElementById("t-middle-bt");
var rightBtn = document.getElementById("t-right-bt");

var leftTitle = document.getElementById("t-left-h");
var middleTitle = document.getElementById("t-middle-h");
var rightTitle = document.getElementById("t-right-h");

var leftP = document.getElementById("left-desc");
var middleP = document.getElementById("middle-desc");
var rightP = document.getElementById("right-desc");

$(document).ready(function() {
	
	// make the top portion of the page
	var recommend = document.createElement("h3");
		recommend.id = "recommendation";
		recommend.innerHTML = "Don't forget, if you would like to open a document in a larger view, just click any purple title.";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 3", "Introduction to Android", [recommend]);
	
	// set titles for bottom links
	leftTitle.innerHTML = left_header;
	middleTitle.innerHTML = middle_header;
	rightTitle.innerHTML = right_header;
	
	// set descriptions for bottom links
	leftP.innerHTML = leftDesc;
	middleP.innerHTML = middleDesc;
	rightP.innerHTML = rightDesc;
});

// create the 'Overview' section
function open_left() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, left_header);
	makeSectionDesc(content, leftDesc);
	
	// create the necessary iframes
	makeDoc(content, "Android Widget Docs (By Google)", "http://developer.android.com/reference/android/widget/package-summary.html");
	insertLine(content);
	
	makeFrame(content, "CheckBox", "https://docs.google.com/presentation/d/1NdDxBv_daBFZvxWrCKiccphTAPFJgA5TV2E3FloDYF8/embed?start=false&loop=false&delayms=5000");
	makeDoc(content, "CheckBox Docs (by Google)", "http://developer.android.com/reference/android/widget/CheckBox.html");
	insertLine(content);
	
	makeFrame(content, "ToggleButton", "https://docs.google.com/presentation/d/1Hhy8M3WS0xQ8qqPBPnBAubr8V1TGgT4vV0wncgMIpyw/embed?start=false&loop=false&delayms=5000");
	makeDoc(content, "ToggleButton Docs (by Google)", "http://developer.android.com/reference/android/widget/ToggleButton.html");
	insertLine(content);
	
	makeDoc(content, "Basics of a TextView (By Java Code Geeks)", "http://examples.javacodegeeks.com/android/core/widget/textview/android-textview-example/");
	makeDoc(content, "TextView Docs (by Google)", "http://developer.android.com/reference/android/widget/TextView.html");
	insertLine(content);
	
	makeFrame(content, "EditText", "https://docs.google.com/presentation/d/1csHKG1n2McIZFlp40x0jBW5EVb0HG5fhJjhEEhv1CPk/embed?start=false&loop=false&delayms=5000");
	makeDoc(content, "EditText Docs (by Google)", "http://developer.android.com/reference/android/widget/EditText.html");
	
	// underline title
	leftTitle.innerHTML = "<u>" + left_header + "</u>";
	middleTitle.innerHTML = middle_header;
	rightTitle.innerHTML = right_header;
	
	// update button text
	leftBtn.innerHTML = bClicked;
	middleBtn.innerHTML = bUnclicked;
	rightBtn.innerHTML = bUnclicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}

// create the 'Getting Started' section
function open_middle() {
	
	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, middle_header);
	makeSectionDesc(content, middleDesc);
	
	// create the necessary iframes
	makeDoc(content, "Android Activity - Simple Tutorial (by Mkyong)", "http://www.mkyong.com/android/android-activity-from-one-screen-to-another-screen/");
	makeDoc(content, "Android Activity Docs (by Google)", "http://developer.android.com/training/basics/activity-lifecycle/starting.html");
	insertLine(content);
	
	makeDoc(content, "More About Layouts (by learn-android)", "http://www.learn-android.com/2010/01/05/android-layout-tutorial/");

	// underline title
	leftTitle.innerHTML = left_header;
	middleTitle.innerHTML = "<u>" + middle_header + "</u>";
	rightTitle.innerHTML = right_header;
	
	// update button text
	leftBtn.innerHTML = bUnclicked;
	middleBtn.innerHTML = bClicked;
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
	makeSectionDesc(content, rightDesc);
	
	// create the necessary iframes
	makeFrame(content, "EditText Quiz", "https://docs.google.com/presentation/d/10ZoyRvMuJhBs1O6xiuA4aQ-nX5DnUOHHvkgxsmkxvoo/embed?start=false&loop=false&delayms=5000");
	makeFrame(content, "If Statements Quiz", "https://docs.google.com/presentation/d/1ChGQht_wKvi0R4W3gD9yVMO_2Q2GqkxHY3F6R15G_6c/embed?start=false&loop=false&delayms=5000");
	makeFrame(content, "TextView Quiz", "https://docs.google.com/presentation/d/1vzzvYEx7DOlW7RYjU5DDZlwnFj8CDG7LLHMNV7z7R1Y/embed?start=false&loop=false&delayms=5000");
	makeFrame(content, "ToggleButton | CheckBox Quiz", "https://docs.google.com/presentation/d/1rjYm4fOAONEZkMRmxR2wvudc71wnppUht4bs209Q0LM/embed?start=false&loop=false&delayms=5000");

	// underline title
	leftTitle.innerHTML = left_header;
	middleTitle.innerHTML = middle_header;
	rightTitle.innerHTML = "<u>" + right_header + "</u>";
	
	// update button text
	leftBtn.innerHTML = bUnclicked;
	middleBtn.innerHTML = bUnclicked;
	rightBtn.innerHTML = bClicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}