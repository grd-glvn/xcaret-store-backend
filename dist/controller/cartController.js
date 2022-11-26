"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllCartItems = exports.removeCartItem = exports.updateCartItem = exports.getCartItems = exports.addItemToCart = void 0;
const cartModel_1 = require("../model/cartModel");
const addItemToCart = async function (req, res) {
    try {
        await cartModel_1.Cart.create(req.body);
        res.status(200).send({
            status: "exito!"
        });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            status: "fail",
            error: e.message
        });
    }
};
exports.addItemToCart = addItemToCart;
const getCartItems = async function (req, res) {
    try {
        const cars = await cartModel_1.Cart.find();
        res.status(200).send({
            status: "exito!",
            data: cars,
        });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            status: "fail",
            error: e.message
        });
    }
};
exports.getCartItems = getCartItems;
const updateCartItem = async function (req, res) {
    try {
        const id = req.params.id;
        await cartModel_1.Cart.findByIdAndUpdate(id, req.body);
        res.status(200).send({
            status: "exito!"
        });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            status: "fail",
            error: e.message
        });
    }
};
exports.updateCartItem = updateCartItem;
const removeCartItem = async function (req, res) {
    try {
        const id = req.params.id;
        await cartModel_1.Cart.findByIdAndDelete(id);
        res.status(200).send({
            status: "item removed!"
        });
        // if(false) throw new Error("no se pudo guardar");
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            status: "fail",
            error: e.message
        });
    }
};
exports.removeCartItem = removeCartItem;
const removeAllCartItems = async function (req, res) {
    try {
        await cartModel_1.Cart.deleteMany();
        res.status(200).send({
            status: "item removed!"
        });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            status: "fail",
            error: e.message
        });
    }
};
exports.removeAllCartItems = removeAllCartItems;
