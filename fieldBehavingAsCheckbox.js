var addNotifications = $('<div/>', {
			"class": "addNotifications",
			"onclick": "Utility.fieldBehavingAsCheckbox(event, this)",
			html: '<input type="checkbox" checked> Add to notifications'
});


function fieldBehavingAsCheckbox(event, obj){
		var dir = $(obj).children("input").is(":checked");
		var eventTarget = event.target.type;
		var objChild = $(obj).children("input");
		if(!dir && eventTarget != "checkbox"){
			objChild.prop('checked', true);
			dir = true;
		} else if(dir && eventTarget != "checkbox"){
			objChild.prop('checked', false);
			dir = false;
		} else {
			objChild.prop('checked', dir);
		}
		return dir;
}