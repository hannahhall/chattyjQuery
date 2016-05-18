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
	// Removes all messages from page
	aug.deleteAll = function () {
		$(".msgArea").empty();
		buttonClearAll.prop("disabled",true);
		Chatty.deleteAllData();
	};

	return aug;

}(Chatty || {}));
