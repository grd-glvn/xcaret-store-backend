"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderController_1 = require("../controller/orderController");
const cardSchema_1 = require("../schemas/cardSchema");
async function orderRoutes(app) {
    app.
        post("/api/order/", cardSchema_1.cardSchemaValidation, orderController_1.placeOrder);
}
exports.default = orderRoutes;
