import { FastifyRequest, FastifyReply } from "fastify";
import { Order } from "../model/orderModel";

export const placeOrder = async (req: FastifyRequest, res: FastifyReply ) => {
    try {
        const {card_name, card_number, card_expiration_date, card_cvv} = req.body;
        // console.log('111111111111111111111111111111111') 
        // if(card_name.length < 2) throw new Error("More than 2 characters are required")
        // if(card_number.length < 16) throw new Error("16 digits required")
        // if(card_number.length < 16) throw new Error("16 digits required")
        // if(card_number.length < 16) throw new Error("16 digits required")
        console.log(card_name)
        res.status(200).send({
            status: "success",
            data: card_name,
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