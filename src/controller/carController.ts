
import { Car } from "../model/carModel";
import { FastifyRequest, FastifyReply } from "fastify"
import { cars } from "../cars"

export const saveToDB = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        Car.create(req.body);
        res.status(200).send({
            status: "exito!"
        })
        // if(false) throw new Error("no se pudo guardar");
        
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}
export const getCars = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        const cars = await Car.find();
        res.status(200).send({
            status: "exito!",
            data: cars,
        })
        // if(false) throw new Error("no se pudo guardar");
        
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}

export const insertAll = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        Car.insertMany(cars);
        res.status(200).send({
            status: "exito!"
        })
        // if(false) throw new Error("no se pudo guardar");
        
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}
