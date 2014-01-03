function doClick(e) {
    alert($.label.text);
}

function addTask() {
	alert('Add Task Function');
}

function tabOpen(e) {
	if (OS_ANDROID) {
		var activity = $.index.getActivity();
		activity.onCreateOptionsMenu = function(e2) {
			var menuItem = e2.menu.add({
				title : 'Add',
				icon : '/images/ic_action_edit.png',
				showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
			});
			menuItem.addEventListener('click', addTask);
		};
		activity.invalidateOptionsMenu();
	}
}

$.index.open();
