import { FastifyInstance } from "fastify"
import { saveToDB, insertAll, getCars } from "../controller/carController"
import { IntrCar } from "../model/carModel";

async function carRoutes (app: FastifyInstance) {
    app
        .post<{Body: IntrCar}>("/api/",
        {  
        //     preValidation: (request, reply, done) => {
        //     const car = request.body
        //     done(car.name === undefined ? new Error('Must be admin') : undefined) // only validate `admin` account
        //   }
        }
          , saveToDB)
        .post<{Body: IntrCar}>("/api/insert-all", insertAll)
        .get("/api/", getCars)

        // .delete("/", carController.eliminar)
        // .patch("/", carController.modificar)
}

export default carRoutes;
// module.exports = routes;