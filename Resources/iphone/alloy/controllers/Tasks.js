function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        __alloyId19.opts || {};
        var models = filterData(__alloyId18);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = transData(__alloyId12);
            var __alloyId14 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId12.__transform["alloy_id"] ? __alloyId12.__transform["alloy_id"] : __alloyId12.get("alloy_id")
            });
            rows.push(__alloyId14);
            doneConfirm ? __alloyId14.addEventListener("click", doneConfirm) : __defers["__alloyId14!click!doneConfirm"] = true;
            var __alloyId15 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId14.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId12.__transform["task"] ? __alloyId12.__transform["task"] : __alloyId12.get("task")
            });
            __alloyId15.add(__alloyId16);
            var __alloyId17 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId12.__transform["limitTime"] ? __alloyId12.__transform["limitTime"] : __alloyId12.get("limitTime")
            });
            __alloyId15.add(__alloyId17);
        }
        $.__views.tasks.setData(rows);
    }
    function addTask() {
        var addWin, index;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("tasksTab");
        }
        addWin = Alloy.createController("Add").getView("addWin");
        Alloy.Globals.currentTab.open(addWin);
    }
    function transData(model) {
        var transform, limitTime;
        transform = model.toJSON();
        limitTime = transform.limitTime;
        transform.limitTime = moment(Number(limitTime)).format("YYYY/MM/DD");
        return transform;
    }
    function filterData(collection) {
        return collection.where({
            done: 0
        });
    }
    function doneConfirm(e) {
        dialogs.confirm({
            message: "Done?",
            callback: function() {
                var model = Alloy.Collections.Todo.where({
                    alloy_id: e.rowData._id
                })[0];
                model.set({
                    done: 1
                }).save();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Tasks";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Tasks = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Tasks",
        id: "Tasks"
    });
    $.__views.Tasks && $.addTopLevelView($.__views.Tasks);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.COMPOSE,
        title: "Add",
        id: "addButton"
    });
    addTask ? $.__views.addButton.addEventListener("click", addTask) : __defers["$.__views.addButton!click!addTask"] = true;
    $.__views.Tasks.rightNavButton = $.__views.addButton;
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.Tasks.add($.__views.tasks);
    var __alloyId18 = Alloy.Collections["Todo"] || Todo;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    $.__views.tasks = Ti.UI.createTableView({
        id: "tasks"
    });
    $.__views.Tasks.add($.__views.tasks);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.addTask = addTask;
    var moment = require("alloy/moment");
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.addButton!click!addTask"] && $.__views.addButton.addEventListener("click", addTask);
    __defers["__alloyId14!click!doneConfirm"] && __alloyId14.addEventListener("click", doneConfirm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;