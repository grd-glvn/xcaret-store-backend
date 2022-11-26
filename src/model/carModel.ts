import { Schema, model } from "mongoose";

export interface IntrCar {
    name: string,
    maker: string,
    car_type: string,
    price_mxn: number,
    price_usd: number, 
    description_es: string,
    description_en: string,
    models: [string],
}

const carSchema = new Schema<IntrCar>({
    name: { type: "string" },
    maker: { type: "string", required: true },
    car_type: { type: "string", required: true },
    price_mxn: {type: "number", required: true},
    price_usd: {type: "number", required: true},
    description_es: {type: "string", required: true},
    description_en: {type: "string", required: true},
    models: [String],
})

export const Car =  model<IntrCar>("Car", carSchema)

