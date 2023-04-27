import { Request, Response } from "express";
import { mongoDBConnect, mongoDBClose, multiple_mongoDBConnect, multiple_mongoDBClose } from "../connect"
import { collection, esDataSchema } from "./model"

let message: any = "정상 처리";
let ret: any = ""

//mongoDB select
export const selectTest = async (req: Request, res: Response) => {

    //mongoDB connect
    await mongoDBConnect();
    try {
        ret = await collection.find({})
        if (ret == null) {
            message = "no find data"
        }
    } catch (err) {
        message = err;
    }
    //mongoDB close

    return res.status(200).json({
        message: message,
        result: ret,
        ret
    });
}
//mongoDB insert
export const insertTest = async (req: Request, res: Response) => {

    let query = [{ test: "dd", test2: "ff" }];

    //mongoDB connect
    await mongoDBConnect();

    try {
        ret = await collection.insertMany(query);
    } catch (err) {
        console.log(err);
        message = err;
    }

    //mongoDB close
    return res.status(200).json({
        message: message,
        result: ret,

    });

}

export const deleteTest = async (req: Request, res: Response) => {
    let query = { test: "dd" }

    //mongoDB connect
    await mongoDBConnect();

    try {
        ret = await collection.deleteOne(query);
    } catch (err) {
        console.log(err);
        message = err;
    }

    //mongoDB close
    return res.status(200).json({
        message: message,
        result: ret,

    });
}

export const selectTestMulti = async (req: Request, res: Response) => {

    //mongoDB connect
    let con = await multiple_mongoDBConnect();
    let collection = await con.model("esData",esDataSchema)
    try {
        ret = await collection.find({})
        if (ret == null) {
            message = "no find data"
        }
    } catch (err) {
        message = err;
    }
    //mongoDB close
    await multiple_mongoDBClose(con);

    return res.status(200).json({
        message: message,
        result: ret,
        ret
    });
}