import { FastifyInstance } from "fastify";
import { placeOrder } from "../controller/orderController";

async function orderRoutes(app:FastifyInstance) {
    app.
        post("/api/order/",placeOrder)

}

export default orderRoutes;