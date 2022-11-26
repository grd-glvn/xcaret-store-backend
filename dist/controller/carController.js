"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAll = exports.getCars = exports.saveToDB = void 0;
const carModel_1 = require("../model/carModel");
const cars_1 = require("../cars");
const saveToDB = async function (req, res) {
    try {
        carModel_1.Car.create(req.body);
        res.status(200).send({
            status: "exito!"
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
exports.saveToDB = saveToDB;
const getCars = async function (req, res) {
    try {
        const cars = await carModel_1.Car.find();
        res.status(200).send({
            status: "exito!",
            data: cars,
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
exports.getCars = getCars;
const insertAll = async function (req, res) {
    try {
        carModel_1.Car.insertMany(cars_1.cars);
        res.status(200).send({
            status: "exito!"
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
exports.insertAll = insertAll;
