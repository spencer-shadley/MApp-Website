var left_header = "Start";
var middle_header = "More";
var right_header = "Even More";

var leftDesc = "Make your programming more versatile with these essential tutorials. The covered topics are Toast Notifications, the Android Manifest, Intents, icons and how to store user preferences.";
var middleDesc = "Yet more learning! See an example of building a ListView, how to link to outside sources within your applications, how to make an Android device vibrate and play sounds!";
var rightDesc = "For the navigation-centric, see how to implement your own ActionBar and Navigation Tabs.";

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
		recommend.innerHTML = "Here are <a href='../html/resources.html' target='_blank' class='link'>some resources</a> you may want to check out!";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 4", unit4Title, [recommend]);
	
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
	makeFrame(content, "Toast Notifications", "https://docs.google.com/presentation/d/1fEJ9ZKMPVSRBDm38DzEN71P9Ubjjlhls0YAHjBxFWVg/embed?start=false&loop=false&delayms=5000");
	insertLine(content);
	
	makeFrame(content, "Android Manifest", "https://docs.google.com/presentation/d/1n4DJuzy384UDBMmp51GxBrtSttxgtYDG7Lmv8aDgLA0/embed?start=false&loop=false&delayms=5000");
	insertLine(content);
	
	makeFrame(content, "Intents", "https://docs.google.com/presentation/d/1AIvhQbaMimKsNlHlh5nvSXhDdSjIvaK_ARj4smbnktY/embed?start=false&loop=false&delayms=5000");
	makeDoc(content, "Intent Example", "https://androiddesk.wordpress.com/2011/12/24/explicit-intent/");
	insertLine(content);
	
	makeDoc(content, "Android Icons Tutorial (by tuts+)", "http://code.tutsplus.com/tutorials/android-user-interface-design-icon-design--mobile-8459");
	insertLine(content);
	
	makeDoc(content, "Preferences", "https://docs.google.com/document/d/14KstFyr4e--cBW4BVeq6FOUHzK2_fFOwyKW_8B6aRxA/pub?embedded=true");
	
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
	makeDoc(content, "ListView", "http://windrealm.org/tutorials/android/android-listview.php");
	insertLine(content);
	
	makeDoc(content, "Content Provider Tutorial (by Grokking Android)", "http://www.grokkingandroid.com/android-tutorial-content-provider-basics/");
	insertLine(content);
	
	makeDoc(content, "URI Docs (by Google)", "http://developer.android.com/reference/java/net/URI.html");
	insertLine(content);
	
	makeDoc(content, "Vibrate Example (by Programmer Guru)", "http://programmerguru.com/android-tutorial/android-vibrate-example/");
	insertLine(content);
	
	makeDoc(content, "Android Sound Example (by EDU Mobile Academy)", "http://www.edumobile.org/android/android-programming-tutorials/sound-pool-example-in-android-development/");
	
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
	makeDoc(content, "ActionBar Tutorial (by vogella)", "http://www.vogella.com/tutorials/AndroidActionBar/article.html");
	insertLine(content);
	
	makeDoc(content, "Menu Docs (by Google)", "http://developer.android.com/guide/topics/ui/menus.html");
	insertLine(content);
	
	makeDoc(content, "Navigation Tabs (by Linux.com)", "http://www.linux.com/learn/tutorials/761642-android-app-development-for-beginners-navigation-with-tabs");
	insertLine(content);

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