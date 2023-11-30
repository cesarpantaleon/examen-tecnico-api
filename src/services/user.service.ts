import {UserModel} from '../models'

export const userService={
    get: async(userName:string)=>{

        return await UserModel.findOne({user_name:userName});

    },
    post:async(entity:object)=>{
        return await UserModel.create(entity);
    }
}