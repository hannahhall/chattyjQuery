"use strict";
var Chatty = (function(aug) {
	var messageArray = [];
	var idCounter = 0;

	// Creates message object
	function Message (string, handle, updateTime) {
		this.string = string;
		this.handle = handle;
		this.time = updateTime;
	}

	// Pushes message object to array
	aug.addNewMessage = function (newItem) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var newMsg = new Message(newItem, `${idCounter}`, updateTime);
		messageArray.push(newMsg);
		idCounter++;
		Chatty.loadMessages(newMsg);
	};

	// Pushes edited message to specific index in array
	aug.editMessage = function (editText, editId, index) {
		var updateTime = new Date();
		updateTime = updateTime.toLocaleTimeString() + " " + updateTime.toLocaleDateString();
		var editMsg = new Message(editText, editId, updateTime);
		messageArray[index]=editMsg;
	};

	// Gives access to messageArray
	aug.getMessages = function () {
		return messageArray;
	};

	// Deletes message from array
	aug.deleteData = function (ex) {
		messageArray.splice(ex, 1);
		Chatty.updatePosition();
	};

	// After a message is deleted in array, this corrects handle to match index
	aug.updatePosition = function () {
		var messages = Chatty.getMessages();
		idCounter = 0
		messages.forEach(function(message) {
			message.handle = idCounter;
			idCounter ++;
		})
		Chatty.updateId();
	}

	// After a message is deleted, updates the id number to match position on page
	aug.updateId = function () {
		idCounter = 0
		$(".message").each(function() {
			this.id = idCounter;
			idCounter ++;
		})
	}

	// Loads message to dom
	aug.loadMessages = function (message) {
			$(".msgArea").append(`<p id="${message.handle}" class="message"><label class='userMsg'>${message.string} </label><button class="delete btn btn-default">Delete</button><button class="edit btn btn-primary">Edit</button><span class="timeStamp">${message.time}</span></p>`);
	};

	return aug;

}(Chatty || {}));
