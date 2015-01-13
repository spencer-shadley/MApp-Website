var ow_header = "Overview";
var gs_header = "Getting Started";
var qz_header = "Quizzes";

var bClicked = "Reload";
var bUnclicked = "Begin";

var owBtn = document.getElementById("t-intro-ow-bt");
var gsBtn = document.getElementById("t-intro-gs-bt");
var qzBtn = document.getElementById("t-intro-qz-bt");

var owTitle = document.getElementById("t-intro-ow-h");
var gsTitle = document.getElementById("t-intro-gs-h");
var qzTitle = document.getElementById("t-intro-qz-h");

// Load the overview section
function open_intro_ow() {

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// make the top portion
	makeSectionTitle(content, "Overview");
	makeSectionDesc(content, "In this section you will learn about terms used in Android development, each Android version, custom versions of Android (skins) and a little about competing mobile platforms.");
	
	// generate the necessary iframes
	makeFrame(content, "Android Terminology", "https://docs.google.com/presentation/d/1XhsIcV0mpGXRTycaFzhgFNcQtHqpdtWlqU-n00VmPcE/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Android Versions", "https://docs.google.com/presentation/d/11sfleClVTE7wDmtenDsN9cO44PBDlRCoSurdZPiY3ao/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Custom OEM Skins", "https://docs.google.com/presentation/d/1xjoFTC_SZHZjSEm47xpvz8CNzsks3AB5ln9Re3LyIOE/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "Overview of Mobile Operating Systems", "https://docs.google.com/presentation/d/1DPaJ101iHZ13T-45rOBpwGR_2hGx2K_W1Cgc4kWRKd8/embed?start=false&loop=false&delayms=3000");

	// underline title
	owTitle.innerHTML = "<u>" + ow_header + "</u>";
	gsTitle.innerHTML = gs_header;
	qzTitle.innerHTML = qz_header;
	
	// update button text
	owBtn.innerHTML = bClicked;
	gsBtn.innerHTML = bUnclicked;
	qzBtn.innerHTML = bUnclicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}

function open_intro_gs() { 

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
	owTitle.innerHTML = ow_header;
	gsTitle.innerHTML = "<u>" + gs_header + "</u>";
	qzTitle.innerHTML = qz_header;
	
	// update button text
	owBtn.innerHTML = bUnclicked;
	gsBtn.innerHTML = bClicked;
	qzBtn.innerHTML = bUnclicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}

function open_intro_quizzes() {

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
	owTitle.innerHTML = ow_header;
	gsTitle.innerHTML = gs_header;
	qzTitle.innerHTML = "<u>" + qz_header + "</u>";
	
	// update button text
	owBtn.innerHTML = bUnclicked;
	gsBtn.innerHTML = bUnclicked;
	qzBtn.innerHTML = bClicked;
	
	// miscellaneous functions after loaded
	finishPageMisc();
}