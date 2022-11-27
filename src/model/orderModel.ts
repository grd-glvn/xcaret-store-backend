import { Schema, model } from "mongoose"

export interface IOrder{
    orderNumber: number,
    cartItems: [{
        name: string,
        maker: string,
        price_mxn: number,
        price_usd: number,
        car_type: string ,
        model: string,
        purchase: {
            method: string,
            loan:{
                downpayment:number,
                term_months: number,
                apr: number,
                loan_payment: number,
            },
            cash: number|null,
        }
    },],
    payment_info: {
        card_name: string,
        card_number: number,
        card_expiration_date: string,
        card_cvv: string,
    }
}

const orderSchema = new Schema({
    orderNumber: {type: "number", required: true},
    cartItems: [{
        name: {type: "string", required: true},
        maker: {type: "string", required: true},
        price_mxn: {type: "number", required: true},
        price_usd: {type: "number", required: true},
        car_type: {type: "string", required: false},
        model: {type: "string", required: false},
        purchase: {
            method:{type: "string", required:true},
            loan:{
                downpayment:{type:"number", required: false},
                term_months: {type: "number", required: false},
                apr: {type: "number", required: false},
                loan_payment: {type: "number", required: false},
            },
            cash: {type: "number", required: false},
        }
    },],
    payment_info: {
        card_name: {type: "string", required: true},
        card_number: {type: "number", required: true},
        card_expiration_date: {type: "string", required: true},
        card_cvv: {type: "string", required: true},
    }
})

export const Order = model<IOrder>("Order", orderSchema);