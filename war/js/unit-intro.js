var left_header = "Overview";
var middle_header = "Getting Started";
var right_header = "Quizzes";

var bClicked = "Reload";
var bUnclicked = "Begin";

var leftBtn = document.getElementById("t-left-bt");
var middleBtn = document.getElementById("t-middle-bt");
var rightBtn = document.getElementById("t-right-bt");

var leftTitle = document.getElementById("t-left-h");
var middleTitle = document.getElementById("t-middle-h");
var rightTitle = document.getElementById("t-right-h");

$(document).ready(function() {
	
	// make the top portion of the page
	var recommend = document.createElement("h3");
		recommend.id = "recommendation";
		recommend.innerHTML = "<h3 id=\"recommendation\">It is recommended to install <a class=\"link\" target=\"_blank\" href=\"https:\/\/play.google.com\/store\/apps\/details?id=com.feztheforeigner.mobileapps\">this<\/a> supplemental application and to take a look at <a class=\"link\" target=\"_blank\" href=\"https:\/\/docs.google.com\/document\/d\/1NLlqwjfeYApoQ1_kniT4VbBIS05QQC6gOvm7OdhseeE\/pub\">this<\/a> document of helpful resources before beginning<\/h3>";
	makeTopPage(document.getElementById("topPageDiv"), "Unit 1", "Introduction to Android", [recommend]);
});

// Load the overview section
function open_left() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Overview");
	makeSectionDesc(content, "In this section you will learn about terms used in Android development, each Android version, custom versions of Android (skins) and a little about competing mobile platforms.");
	
	// generate the necessary iframes
	makeFrame(content, "Android Versions", "https://docs.google.com/presentation/d/11sfleClVTE7wDmtenDsN9cO44PBDlRCoSurdZPiY3ao/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Android Terminology", "https://docs.google.com/presentation/d/1XhsIcV0mpGXRTycaFzhgFNcQtHqpdtWlqU-n00VmPcE/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Custom OEM Skins", "https://docs.google.com/presentation/d/1xjoFTC_SZHZjSEm47xpvz8CNzsks3AB5ln9Re3LyIOE/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Overview of Mobile Operating Systems", "https://docs.google.com/presentation/d/1DPaJ101iHZ13T-45rOBpwGR_2hGx2K_W1Cgc4kWRKd8/embed?start=false&loop=false&delayms=3000");

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

function open_middle() { 

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Getting Started");
	makeSectionDesc(content, "In this section you will learn about the differences between density-independent pixels compared to regular pixels, how to setup layouts in Android and the best practices for storing resources in Android apps.");
	
	// generate the necessary iframes
	makeFrame(content, "DP vs PX | Values and Drawables", "https://docs.google.com/presentation/d/1c5RtkcozM6gjy9g_0kKetuL2kCcC2k01tS__qKfj9-k/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Layout Width and Height", "https://docs.google.com/presentation/d/1aiZdQeORS_tvkeUCVBf_j2he4jlOSeuZQSd93sKnfw4/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Android Layouts", "https://docs.google.com/presentation/d/193pp-FUuCbGPGtD8zPsxwKO4_QvuJI4V5THnpp7XQzg/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Using and Calling Drawables and Values", "https://docs.google.com/presentation/d/1eHDPJ5V1BYJt5XsqguVpGSABYL_efyhmLv8Z9mz2VpQ/embed?start=false&loop=false&delayms=3000");

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

function open_right() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Quizzes!");
	makeSectionDesc(content, "In this section you get to put what you learned to the test! Three quizzes are available which cover Android terminology, Android versions and the difference between density-independent pixels and plain old pixels.");

	// generate the necessary iframes
	makeFrame(content, "Android Terminology Quiz", "https://docs.google.com/presentation/d/1r6pryQec1oSgy6tyiMeTEJaositzGNFlW_ThcKh2mqw/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Android Versions Quiz", "https://docs.google.com/presentation/d/1u5BQgGhZNlltnSxrkR_54T8L_y7w6k6Scb-fAMToU4o/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Difference Between DP and PX Quiz", "https://docs.google.com/presentation/d/1FsngA_z9Bo2jjbfFsAYCtL-lQRsnATkJLLkttFat8W0/embed?start=false&loop=false&delayms=3000");

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