import dotenv from 'dotenv';
import {connect} from 'mongoose';

dotenv.config();

export const mongoConect = async ()=>{
    
    try {
        await connect(process.env.MONGO_URL as string);
        console.log('Connected');
    }
    catch(error) {
        console.log(error, 'Not connected');
    }
}