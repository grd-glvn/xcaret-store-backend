"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    orderNumber: { type: "number", required: true },
    cartItems: [{
            name: { type: "string", required: true },
            maker: { type: "string", required: true },
            price_mxn: { type: "number", required: true },
            price_usd: { type: "number", required: true },
            car_type: { type: "string", required: true },
            model: { type: "string", required: false },
            purchase: {
                method: { type: "string", required: true },
                loan: {
                    downpayment: { type: "number", required: false },
                    term_months: { type: "number", required: false },
                    apr: { type: "number", required: false },
                    loan_payment: { type: "number", required: false },
                },
                cash: { type: "number", required: false },
            }
        },],
    payment_info: {
        card_name: { type: "string", required: true },
        card_number: { type: "number", required: true },
        card_expiration_date: { type: "string", required: true },
        card_cvv: { type: "string", required: true },
    }
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
