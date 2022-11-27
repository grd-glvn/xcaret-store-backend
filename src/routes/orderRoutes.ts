import { FastifyInstance } from "fastify";
import { placeOrder } from "../controller/orderController";
import { cardSchemaValidation } from "../schemas/cardSchema";

async function orderRoutes(app:FastifyInstance) {
    app.
        post("/api/order/", cardSchemaValidation , placeOrder)

}

export default orderRoutes;