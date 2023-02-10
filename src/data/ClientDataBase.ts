import { CustomError } from '../error/CustomError';
import { Client } from '../models/Client';
import { BaseDataBase } from './BaseDataBase';
export class ClientDatabase extends BaseDataBase {

    async createClient(client: Client) {
        try {
            ClientDatabase.connection.initialize();
            await ClientDatabase.connection("Case_Clients").insert(client);
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }finally{
            ClientDatabase.connection.destroy();
        }
    }
}