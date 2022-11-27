import { FastifyInstance } from "fastify";
import { getLang } from "../controller/langController";

async function langRoute(app:FastifyInstance) {
    app
        .get("/api/lang/", getLang )

}

export default langRoute;