import {Schema, model} from 'mongoose';

export interface IUser extends Document{
  user_name: string,
  password: string
}

const userSchema=new Schema({
  user_name: {
    type:String,
    min:10
  },
  password: {
    type:String 
  }
});

export const UserModel=model<IUser>('users',userSchema);
