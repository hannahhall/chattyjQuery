"use strict";
var Chatty= (function(xhr){
	$.getJSON("javaScripts/messages.json").done(fetchMsg);

	function fetchMsg (messageData) {
		var jsonMessages = messageData.messages;
		console.log(jsonMessages);
		$.each(jsonMessages, (key, message) => {
			console.log(message.user);
			Chatty.addNewMessage(message.message, message.user);
		});
	}

return xhr;
}(Chatty || {}));

