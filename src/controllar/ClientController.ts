import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { ClientCreateInputDTO } from "../models/Client";

export class ClientController{

    createClient =async (req: Request, res: Response) => {
        const clientBusiness=new ClientBusiness();
        try{
            const name=req.body.name
            const input=new ClientCreateInputDTO(name)
            await clientBusiness.createClient(input)
            res.status(200).send("Cliente Cadastrado com sucesso!")
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}