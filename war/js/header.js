$(document).ready(function() {

	// set all unit descriptions
	 var descs = document.getElementsByClassName("unit_link");
	 
	 for(var i=0; i<descs.length; i++) {
		 descs[i].innerHTML += ": " + unitTitles[i];
	 }
	 
});