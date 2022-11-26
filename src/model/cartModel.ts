import { Schema, model } from "mongoose";

export interface ICart {
    _id: string,
    name: string,
    maker: string,
    car_price: number,
    price_mxn: number,
    price_usd: number,
    selected_currency: string,
    model: string,
    loan: object|null,
    subtotal: number,
}

const cartSchema = new Schema<ICart>({
    _id:{ type: "string" },
    name: { type: "string" },
    maker: { type: "string", required: true },
    car_price: { type: "number", required: true },
    price_mxn: { type: "number", required: true },
    price_usd: { type: "number", required: true },
    selected_currency: {type: "string", required: true},
    model: {type:"string", required: false},
    loan: {type:"object", required: false},
    subtotal: { type: "number", required: true },
})

export const Cart =  model<ICart>("Cart", cartSchema);


