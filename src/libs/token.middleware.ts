import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config'

export const tokenValidation=(req:Request, res:Response, next:NextFunction)=>{
    try{
        const token= req.header('Authorization');
        if(!token) return res.status(401).json({message:'Access denied'});
    
        const payload= jwt.verify(token, TOKEN_SECRET || 'token_test')
    
        next();
    }
    catch(err:any){
        res.status(400).send({message:'Incorrect token'});
    }
}