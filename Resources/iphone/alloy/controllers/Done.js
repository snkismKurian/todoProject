function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = filterData(__alloyId9);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = transData(__alloyId3);
            var __alloyId5 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId5);
            var __alloyId6 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId5.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "18sp",
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId3.__transform["task"] ? __alloyId3.__transform["task"] : __alloyId3.get("task")
            });
            __alloyId6.add(__alloyId7);
            var __alloyId8 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                font: {
                    fontSize: "14sp"
                },
                text: "undefined" != typeof __alloyId3.__transform["limitTime"] ? __alloyId3.__transform["limitTime"] : __alloyId3.get("limitTime")
            });
            __alloyId6.add(__alloyId8);
        }
        $.__views.done.setData(rows);
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
            done: 1
        });
    }
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
    var __alloyId9 = Alloy.Collections["Todo"] || Todo;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;