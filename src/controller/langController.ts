import { FastifyRequest, FastifyReply } from "fastify"
import { lang } from "../utils/lang"

export const getLang = async function (req: FastifyRequest, res: FastifyReply) {
    try {
        res.status(200).send({
            status: "exito!",
            data: lang
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