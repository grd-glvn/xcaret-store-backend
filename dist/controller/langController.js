"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLang = void 0;
const lang_1 = require("../utils/lang");
const getLang = async function (req, res) {
    try {
        res.status(200).send({
            status: "exito!",
            data: lang_1.lang
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
exports.getLang = getLang;
