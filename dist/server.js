"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastifyCors = require("@fastify/cors");
const mongoose_1 = require("mongoose");
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
require('dotenv').config();
const app = (0, fastify_1.default)({ logger: true });
connectToDB().catch(e => console.log(e));
async function connectToDB() {
    await (0, mongoose_1.connect)(`${process.env.MONGODB_URL}`);
}
app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
});
app.register(carRoutes_1.default);
app.register(cartRoutes_1.default);
app.register(orderRoutes_1.default);
app.listen({ port: Number(process.env.PORT) || 3001, host: '0.0.0.0' }, function (err, address) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening on ${address}`);
});
