"use strict";

// Main content elements
var headerDiv = $("#navBar"),
		logoDiv = $("#logo"),
		h1Text = $("h1"),
		h2Text = $("h2"),
		mainContent = $("#main-content"),
		contentWrap = $("#wrapper"),
		userInput = $("#userInput"),
		clearAllButton = $("#clear"),
		submitButton = $("#submit"),
		msgArea = $("#msgArea"),
		edit = false,
		id,
		messageToEdit,
		userName,
		userMessage;

// Event Listeners
userInput.keypress(msgSubmit);
submitButton.click(msgSubmit);
clearAllButton.click(Chatty.deleteAll);
msgArea.click(Chatty.deleteMsg);
msgArea.click(editMsg);

// Runs when submit button is clicked or enter key is pressed
function msgSubmit(key) {
	if($(event.target).hasClass("submit") || key.which === 13) {
		if (edit === true) {
			var editMsg = $(document.getElementById(id))[0];
			var index = id;
			console.log(index);
			Chatty.editMessage(userInput.val(), id, index, userName);
			edit = false;
			userInput.val("");
			userInput.off("keyup");
		} else {
			var rButton = $(".rButton");
			for (var i = 0; i < rButton.length; i++) {
				if (rButton[i].checked) {
					var selected = rButton[i].value;
				}
			}
			Chatty.addNewMessage(userInput.val(), selected);
			userInput.val("");
			clearAllButton.prop("disabled", false);
		}
	}
}

// Runs when edit button is clicked
function editMsg() {
	if($(event.target).hasClass("edit")) {
		edit = true;
		messageToEdit = $(event.target).parent().html();
		console.log(messageToEdit);
		id = $(event.target).parent().prop("id");
		userName = $(event.target).siblings(".userName").html();
		console.log(userName);
		userMessage = $(event.target).siblings("label");
		userInput.focus();
		userInput.val(userMessage.html());
		userInput.on("keyup",
			(function () {
				userMessage.html(userInput.val());
			})
		);
	}
}
