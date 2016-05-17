"use strict";
var Chatty= (function(xhr){
	$.getJSON("javaScripts/messages.json").done(fetchMsg);

	function fetchMsg (messageData) {
		var jsonMessages = messageData.messages;
		$.each(jsonMessages, (key, message) => {
			Chatty.addNewMessage(message);
		});
	}

return xhr;
}(Chatty || {}));

