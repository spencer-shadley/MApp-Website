var left_header = "Go!";
var middle_header = "Project";
var right_header = "Test";

var leftDesc = "Eclipse is the Integrated Development Environment you will be working in. Since you will spend exorbitant amounts of time here, a list of shortcuts has been provided to catalyze the time required to develop apps. You will also learn about RadioButtons/RadioGroups and discover how to identify objects in Java and XML.";
var middleDesc = "Learn more about the word app, its history and how it has evolved over time. Then, make an actual Android application using those RadioButtons from the previous section.<br>(The point system is there only if you would like to score yourself, personally I would just give myself a 100% though)";
var rightDesc = "Take a short test over what you have learned from this section. Read through some example code and see if you can answer the questions!";

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
		recommend.innerHTML = "<h3 id=\"recommendation\">It is recommended to install <a class=\"link\" target=\"_blank\" href=\"https:\/\/play.google.com\/store\/apps\/details?id=com.feztheforeigner.mobileapps\">this<\/a> supplemental application and to take a look at <a class=\"link\" target=\"_blank\" href=\"https:\/\/docs.google.com\/document\/d\/1NLlqwjfeYApoQ1_kniT4VbBIS05QQC6gOvm7OdhseeE\/pub\">this<\/a> document of helpful resources before beginning<\/h3>";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 2", unit2Title, [recommend]);

	// set titles for bottom links
	leftTitle.innerHTML = left_header;
	middleTitle.innerHTML = middle_header;
	rightTitle.innerHTML = right_header;
	
	// set descriptions for bottom links
	leftP.innerHTML = leftDesc;
	middleP.innerHTML = middleDesc;
	rightP.innerHTML = rightDesc;
});

// create 'Go!' section
function open_left() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Go!");
	makeSectionDesc(content, leftDesc);
	
	// generate the necessary iframes
	makeFrame(content, "Eclipse Hints", "https://docs.google.com/presentation/d/13IU-kcTcrxDYKhhgsYdn_Iv-UYzW4oG2mSH9CEMNGzw/embed?start=false&loop=false&delayms=5000");
	insertLine(content);
	
	makeFrame(content, "RadioGroup | RadioButton", "https://docs.google.com/presentation/d/17XhqKZoCjnIkqu-n67UiHUKKGRXbtaMoOS9jVV6ZbEo/embed?start=false&loop=false&delayms=5000");
	makeDoc(content, "RadioGroup Docs (by Google)", "http://developer.android.com/reference/android/widget/RadioGroup.html");
	makeDoc(content, "RadioButton Docs (by Google)", "http://developer.android.com/reference/android/widget/RadioButton.html");
	insertLine(content);
	
	makeFrame(content, "Ids in XML and Java", "https://docs.google.com/presentation/d/1QoTOsUf0rOEBqcBpqJJ44x0Z0KO4uyVLQYpsfAPdU1w/embed?start=false&loop=false&delayms=5000");
	
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

// create 'Project' section
function open_middle() { 

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Project");
	makeSectionDesc(content, middleDesc);
	
	// generate the necessary iframes
	makeDoc(content, "What's an App?", "https://docs.google.com/document/d/1kevW8xqpUg5ZpEN9pKDAxu8etVqUDQge6jhfm7-ENyU/pub?embedded=true");
	insertLine(content);
	
	makeDoc(content, "Make an App with RadioButtons", "https://docs.google.com/document/d/1hiMvgxUnJpwXNIXdqPOTYmy03ZJZt0Vj7f-4Zfx1n04/pub?embedded=true");
	
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

// create 'Test' section
function open_right() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Test");
	makeSectionDesc(content, rightDesc);
	
	// generate the necessary iframes
	makeDocCustomHeight(content, "RadioButtons Test", 900, "https://docs.google.com/document/d/1fkZd_jCCc0DbUc9LLbDT_5WRAgrhQwBpfb5xpvmocHI/pub?embedded=true");
	
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

// opens after clicking the nested link describing why to click links
function explainLink() {
	alert("Thanks for clicking me! Try clicking other purple things (like the title for the below test) to open them in a new tab.");
}