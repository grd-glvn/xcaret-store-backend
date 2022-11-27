"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const langController_1 = require("../controller/langController");
async function langRoute(app) {
    app
        .get("/api/lang/", langController_1.getLang);
}
exports.default = langRoute;
