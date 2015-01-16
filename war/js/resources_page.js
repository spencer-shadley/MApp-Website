var bClicked = "Reload";
var bUnclicked = "Begin";

$(document).ready(function() {
	
	// make the top portion of the page
	var recommend = document.createElement("h3");
		recommend.id = "recommendation";
		recommend.innerHTML = "";
	makeTopPage(document.getElementById("topPageDiv"), "Resources", "Helpful Material", [recommend]);

	// get the div to add to and perform miscellaneous functions
	var content = document.getElementById("content");
	startPageMisc(content);
	
	// generate the necessary iframes
	makeDoc(content, "Setup for Android Development", "https://docs.google.com/document/d/1gRvVH_rhtt5tbl1slR4gbFTt7Li1YPFFdqQ18eGxwnU/pub?embedded=true");
	makeDoc(content, "Tools", "https://docs.google.com/document/d/1_yWHbi6fCQEn7N6BMhozqDaRBedzUSVBPZDE4aj5ALs/pub?embedded=true");
	makeDoc(content, "Publishing (more in Unit 6)", "https://docs.google.com/document/d/1XU1K1nHka-ZYWWSc2csCpbO0Xpl7b0CLAr0XkCE3B3w/pub?embedded=true");
	makeDoc(content, "More Tutorials", "https://docs.google.com/document/d/1o3D6jXmEb-7FTGT6oiOudkkjVpTXAwpTWWA2YAwXlVU/pub?embedded=true");
	makeFrame(content, "Installing the App", "https://docs.google.com/presentation/d/1gzy54z_lR9ECl4HrUbY7kRK8sDCkcHe-5_bofR9LFkU/embed?start=false&loop=false&delayms=3000");
	makeFrame(content, "History of Computing", "https://docs.google.com/presentation/d/19GDDpOGlfXdKCzL3x9ZzNgE9p8Mi4wyOtjgsF3MGNF4/embed?start=false&loop=false&delayms=5000");
	
	// aggregate of three of the above slidedecks
	// makeDoc(content, "Setup for Android Development | More Android Tutorials | Helpful Sites", "https://docs.google.com/document/d/1NLlqwjfeYApoQ1_kniT4VbBIS05QQC6gOvm7OdhseeE/pub?embedded=true");
	
	// miscellaneous functions after loaded
	finishPageMisc();
});