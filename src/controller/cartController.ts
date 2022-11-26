
import { Cart } from "../model/cartModel";
import { FastifyRequest, FastifyReply } from "fastify"

export const addItemToCart = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        await Cart.create(req.body);
        res.status(200).send({
            status: "exito!"
        })
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}

export const getCartItems = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        const cars = await Cart.find();
        res.status(200).send({
            status: "exito!",
            data: cars,
        })    
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}

export const updateCartItem = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        const id = req.params.id;
        await Cart.findByIdAndUpdate(id, req.body);
        res.status(200).send({
            status: "exito!"
        })   
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}

export const removeCartItem = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        const id = req.params.id;
        await Cart.findByIdAndDelete(id);
        res.status(200).send({
            status: "item removed!"
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
export const removeAllCartItems = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        await Cart.deleteMany();
        res.status(200).send({
            status: "item removed!"
        })
    } catch(e: any|null) {
        console.log(e)
        res.status(400).send({
            status: "fail",
            error: e.message
        })
    } 
}