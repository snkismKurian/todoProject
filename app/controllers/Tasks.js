var args = arguments[0] || {};

function addTask() {
	var addWin, index;
	if (Alloy.Globals.currentTab === undefined) {
		index = Alloy.createController("index");
		Alloy.Globals.currentTab = index.getView("tasksTab");
	}
	addWin = Alloy.createController("Add").getView("addWin");
	Alloy.Globals.currentTab.open(addWin);
}

$.addTask = addTask;