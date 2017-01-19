'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});
  $("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
  // console.log("Project clicked")
  e.preventDefault();
  // $(this).css("background-color", "#1FAB89");
  //
  var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);
}
