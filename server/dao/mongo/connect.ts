import mongoose, { Mongoose, Connection }  from 'mongoose';
import dotenv from "dotenv"
dotenv.config()

const mongoDBConnect = async ()=>{

    let connection = await mongoose.connect(process.env.MONGODB_URL+"/"+process.env.MONGODB_NAME);
    console.log("mongoDB connect "+process.env.MONGODB_URL+"/"+process.env.MONGODB_NAME);
    return connection;
}

const mongoDBClose = async (con : Mongoose)=>{
    await con.connection.close();
    console.log("mongoDB close...");
}

export const multiple_mongoDBConnect = async (): Promise<Connection | any> => {
    try {
        const connection = mongoose.createConnection(process.env.MONGODB_URL + "/" + process.env.MONGODB_NAME).asPromise();
        console.log('✅ MongoDB Connect Success..');
        return connection;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const multiple_mongoDBClose = async (conn: Connection) => {
    try {
        await conn.close()
        console.log("MongoDB Connect Close..");
    } catch (error) {
        console.log(error)
    }
}


export {mongoDBConnect, mongoDBClose}