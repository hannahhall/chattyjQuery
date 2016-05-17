"use strict";
var Chatty = (function (aug) {
	var buttonClearAll = $("#clear");       // Grabs clear button

	// Removes single message from page
	aug.deleteMsg = function (event) {
		 if($(event.target).hasClass("delete")) {
			var id = $(event.target).parent().prop("id");
			$(event.target).parent().remove();
			Chatty.deleteData(id);

		}
	};
	// Removes all messages
	aug.deleteAll = function () {
		var messages = Chatty.getMessages();
		console.log(messages.length);
		for (var i = 0; i < messages.length; i++) {
			messages.splice(i);
		}
		$(".msgArea").empty();
		buttonClearAll.prop("disabled",true);
	};

	return aug;

}(Chatty || {}));
