import {connect} from 'mongoose';
import {MONGO_URI} from '../config'

export const connectDB=()=>{
    connect(MONGO_URI as string)
    .then(db=>console.log('Database is connected.'))
    .catch(err=>console.log(err));
}