import fastify, {FastifyInstance} from "fastify";
const fastifyCors = require("@fastify/cors")
import {connect} from "mongoose";
import carRoute from "./routes/carRoutes";
import cartRoute from "./routes/cartRoutes";
import orderRoute from "./routes/orderRoutes";
require('dotenv').config();

const app:FastifyInstance = fastify({
    logger: true,
    ajv: {
        customOptions: {
            formats: {
                "name" : /\b[A-Za-z]+\b/,
                "cvv": /^\d{3}$/,
                "cardNumber": /^\d{16}$/,
                "cardDate": /^(1[1-2]|0[1-9])\/[2-9][0-9]$/,
            }
        }
    }

});

connectToDB().catch( e => console.log(e) )

async function connectToDB() {
    await connect(`${process.env.MONGODB_URL}`);
}

app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
})
app.register(carRoute)
app.register(cartRoute)
app.register(orderRoute)



app.listen({ port: Number(process.env.PORT) || 3001, host: '0.0.0.0'}, function(err: Error| null, address: String) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`Server listening on ${address}`)
})