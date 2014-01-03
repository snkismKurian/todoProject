function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function tabOpen(e) {
        Alloy.Globals.currentTab = e.activetab;
    }
    function tabFocus(e) {
        Alloy.Globals.currentTab = e.tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId2 = [];
    $.__views.__alloyId3 = Alloy.createController("Tasks", {
        id: "__alloyId3"
    });
    $.__views.tasksTab = Ti.UI.createTab({
        window: $.__views.__alloyId3.getViewEx({
            recurse: true
        }),
        title: "Tasks",
        id: "tasksTab"
    });
    __alloyId2.push($.__views.tasksTab);
    $.__views.__alloyId5 = Alloy.createController("Done", {
        id: "__alloyId5"
    });
    $.__views.doneTab = Ti.UI.createTab({
        window: $.__views.__alloyId5.getViewEx({
            recurse: true
        }),
        title: "Done",
        id: "doneTab"
    });
    __alloyId2.push($.__views.doneTab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    tabOpen ? $.__views.index.addEventListener("open", tabOpen) : __defers["$.__views.index!open!tabOpen"] = true;
    tabFocus ? $.__views.index.addEventListener("focus", tabFocus) : __defers["$.__views.index!focus!tabFocus"] = true;
    $.__views.__alloyId7 = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "__alloyId7"
    });
    $.__views.__alloyId7 && $.addTopLevelView($.__views.__alloyId7);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.__alloyId7.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;