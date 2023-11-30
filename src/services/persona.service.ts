import axios from 'axios';
import {PersonaModel} from '../models'

export const personaService={
    getAll:async ()=>{
        return await PersonaModel.find();
    },
    create:async(entity:object)=>{
        return await PersonaModel.create(entity);
    },
    get:async(ruc:string)=>{
        return await PersonaModel.findOne({ruc});
    },
    getRuc: async(ruc:string)=>{
        const response = await axios.get(`http://wsruc.com/Ruc2WS_JSON.php?tipo=2&ruc=${ruc}&token=cXdlcnR5bGFtYXJja19zYUBob3RtYWlsLmNvbXF3ZXJ0eQ==`);
        var resp=response.data;
        return resp;
    }

}