import { ClientDatabase } from "../data/ClientDataBase";
import { InvalidName } from "../error/ClientEror";
import { CustomError } from "../error/CustomError";
import { Client, ClientCreateInputDTO } from "../models/Client";
import { IdGenerator } from "../services/idGenerator";

export class ClientBusiness {
    createClient = async (input: ClientCreateInputDTO) => {
        
        try {
            const clientDataBase=new ClientDatabase();

            if (!input.getName()) {
                throw new InvalidName();
            }
           
            const id= IdGenerator.generateId();
            const client:Client= new Client(input.getName(),id)
            await clientDataBase.createClient(client);

        } catch (error: any) {
            throw new CustomError(error.status,error.message);
        }
    }
}