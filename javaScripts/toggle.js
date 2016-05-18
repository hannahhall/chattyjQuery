"use strict";
var changeBCG = $("#changeBackground"),
		changeFont = $("#changeFont"),
		save = $("#saveTheme"),
		darkTheme = $("#darkTheme"),
		largeText = $("#largeText");

save.click(changeTheme);
darkTheme.click(toggleDark);
largeText.change(toggleLarge);

// Increases font size
function toggleLarge() {
	$('#wrapper').toggleClass("large");
}

// Inverts colors found on stack overflow http://stackoverflow.com/questions/4766201/javascript-invert-color-on-all-elements-of-a-page
function toggleDark () {
	var css = 'html {-webkit-filter: invert(100%);' +
			'-moz-filter: invert(100%);' +
			'-o-filter: invert(100%);' +
			'-ms-filter: invert(100%); }',
	head = $('head')[0];
	var style = document.createElement('style');
	if (!window.counter) {
		window.counter = 1;
	} else  {
		window.counter ++;
		if (window.counter % 2 === 0) {
			css ='html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
		}
	}
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
}


// // Custom Theme JS
function changeTheme () {
	var newStyle = {
		"backgroundColor": changeBCG.val(),
		"color": changeFont.val()
	};
  $(".msgArea").css(newStyle);
}
