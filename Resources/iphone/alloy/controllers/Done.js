function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Done";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Done = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Done",
        id: "Done"
    });
    $.__views.Done && $.addTopLevelView($.__views.Done);
    $.__views.done = Ti.UI.createTableView({
        id: "done"
    });
    $.__views.Done.add($.__views.done);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;