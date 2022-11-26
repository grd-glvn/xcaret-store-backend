"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderController_1 = require("../controller/orderController");
async function orderRoutes(app) {
    app.
        post("/api/order/", orderController_1.placeOrder);
}
exports.default = orderRoutes;
