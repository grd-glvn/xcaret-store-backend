"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    name: { type: "string" },
    maker: { type: "string", required: true },
    car_type: { type: "string", required: true },
    price_mxn: { type: "number", required: true },
    price_usd: { type: "number", required: true },
    description_es: { type: "string", required: true },
    description_en: { type: "string", required: true },
    models: [String],
});
exports.Car = (0, mongoose_1.model)("Car", carSchema);
