"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carController_1 = require("../controller/carController");
async function carRoutes(app) {
    app
        .post("/", {
    //     preValidation: (request, reply, done) => {
    //     const car = request.body
    //     done(car.name === undefined ? new Error('Must be admin') : undefined) // only validate `admin` account
    //   }
    }, carController_1.saveToDB)
        .post("/insert-all", carController_1.insertAll)
        .get("/", carController_1.getCars);
    // .delete("/", carController.eliminar)
    // .patch("/", carController.modificar)
}
exports.default = carRoutes;
// module.exports = routes;
