
import {Request, Response} from 'express';
import {personaService} from '../services'

export const personaController={
    getPersonaAll:async (req:Request, res:Response)=>{
        try{

            const data=await personaService.getAll();
            return res.json(data);
        }
        catch(error:any){
            res.status(400).json({
                message:error.message
            })
        }
    },
    getRuc:async (req:Request, res:Response)=>{
        try{

            const {ruc}=req.params;

            const data=await personaService.getRuc(ruc);

            res.status(200).send(data);
        }
        catch(error:any){
            res.status(400).json({
                message:error.message
            })
        }
    },
    post: async (req:Request, res:Response)=>{
        try{

            const per=await personaService.get(req.body.ruc);

            if(per){
                res.status(400).json({
                    message:"RUC ya existe!!"
                })
            }
            else{
                const data=await personaService.create(req.body);

                res.status(200).send(data);
            }
            
        }
        catch(error:any){
            res.status(400).json({
                message:error.message
            });
        }
    }
}
