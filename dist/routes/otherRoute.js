"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function otherRoute(app) {
    app
        .get("/other/", async (req, res) => {
        res.send("ok");
    });
}
exports.default = otherRoute;
