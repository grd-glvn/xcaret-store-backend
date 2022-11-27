"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const ajv = new ajv_1.default({ allErrors: true });
(0, ajv_formats_1.default)(ajv);
ajv.addFormat("cvv", /^\d{3}$/);
ajv.addFormat("card_number", /^(5356|4142)\d{12}$/);
ajv.addFormat("card_date", /^(1[1-2]|0[1-9])\/[2-9][0-9]$/);
const cardSchema = {
    type: "object",
    properties: {
        card_name: { type: "string" },
        card_cvv: { type: "string", format: "cvv" },
        card_number: { type: "string", format: "card_number" },
        card_date: { type: "string", format: "card_date" },
    },
    required: ["card_name", "card_cvv", "card_number", "card_date"],
    additionalProperties: false,
};
const validate = ajv.compile(cardSchema);
const data = {
    card_name: "name",
    card_number: "5356567891234567",
    card_date: "01/29",
    card_cvv: "234",
};
const valid = validate(data);
if (!valid)
    console.log(validate.errors);
console.log("okay");
