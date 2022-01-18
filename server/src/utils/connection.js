import mongoose from 'mongoose';
import config from 'config';

export async function connectToDb(){
    try {
        const dbUri = config.get<string>(dbUri);
        await mongoose.connect(dbUri);
        console.log(`connected to MongoDB at uri: ${dbUri}`);
    } catch (error) {
        console.log(`database connection error at uri: ${dbUri}`);
    }
}

