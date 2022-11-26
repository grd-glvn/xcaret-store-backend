import fastify, {FastifyInstance} from "fastify";
const fastifyCors = require("@fastify/cors")
import {connect} from "mongoose";
import carRoute from "./routes/carRoutes";
import cartRoute from "./routes/cartRoutes";
import orderRoute from "./routes/orderRoutes";
require('dotenv').config();

const app:FastifyInstance = fastify({logger: true});

connectToDB().catch( e => console.log(e) )

async function connectToDB() {
    await connect(`${process.env.MONGODB_URL}`);
}

app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
})
app.register(carRoute)
app.register(cartRoute)
app.register(orderRoute)



app.listen({ port: Number(process.env.PORT) || 3001, host: '127.0.0.1'}, function(err: Error| null, address: String) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`Server listening on ${address}`)
})