const controller = require('../controller/itemservicecontroller')

module.exports = function(app) {
    app.route("/getitems").get(controller.getitems)
    app.route("/saveitems").post(controller.saveitems)
}