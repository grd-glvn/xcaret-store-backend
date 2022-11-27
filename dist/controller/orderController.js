"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrder = void 0;
const placeOrder = async (req, res) => {
    try {
        const { card_name, card_number, card_date, card_cvv } = req.body;
        console.log(card_name);
        res.status(200).send({
            status: "success",
            data: { card_name,
                card_number,
                card_date,
                card_cvv,
            }
        });
    }
    catch (e) {
        res.status(400).send({
            status: "error",
            err: e.message,
        });
    }
};
exports.placeOrder = placeOrder;
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
