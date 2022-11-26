"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    _id: { type: "string" },
    name: { type: "string" },
    maker: { type: "string", required: true },
    car_price: { type: "number", required: true },
    price_mxn: { type: "number", required: true },
    price_usd: { type: "number", required: true },
    selected_currency: { type: "string", required: true },
    model: { type: "string", required: false },
    loan: { type: "object", required: false },
    subtotal: { type: "number", required: true },
});
exports.Cart = (0, mongoose_1.model)("Cart", cartSchema);
