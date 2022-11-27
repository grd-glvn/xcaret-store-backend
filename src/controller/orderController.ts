import { FastifyRequest, FastifyReply } from "fastify";
import { Order } from "../model/orderModel";

interface BodyCard {
    card_name: string,
    card_number: string,
    card_date: string,
    card_cvv: string,

}

export const placeOrder  = async (req: FastifyRequest, res: FastifyReply ) => {
    try {
        const {card_name, card_number, card_date, card_cvv} = req.body;
        console.log(card_name)
        res.status(200).send({
            status: "success",
            data: {card_name,
                card_number,
                card_date,
                card_cvv,
            }
        })

    } catch (e) {
        res.status(400).send({
            status: "error",
            err: e.message,
        })
    }
} 
// export const placeOrder = async (req: FastifyRequest, res: FastifyReply ) => {
//     try {
//         const order = await Order.create(req.body);
//         res.status(200).send({
//             status: "success",
//             data: order,
//         })

//     } catch (e) {
//         res.status(400).send({
//             status: "error",
//         })
//     }
// } 