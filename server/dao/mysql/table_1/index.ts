import { Request, Response } from "express";
import { mysqlConnect } from "../connect";

let message: any = "정상 처리";
let ret: any = ""

//mysql select
export const selectTest = async (req: Request, res: Response) => {

    const connection: any = await mysqlConnect();
    
    let query = "select * from TB_test";
    try{
        let [ rows, fields ] = await connection.query(query);
        ret = rows;
    }catch(err){
        console.log(err);
        message = err;
    }
    
    return res.status(200).json({
        message: message,
        result : ret
    });

}

//mysql insert
export const insertTest = async (req: Request, res: Response) => {

    const connection: any = await mysqlConnect();
    
    let query = "insert into TB_test Values (10041,'홍길동_40', 40)";
    
    try{
        let [ rows, fields ] = await connection.query(query);
        ret = rows;
    }catch(err){
        console.log(err);
        message = err;
    }
    
    return res.status(200).json({
        message: message,
        result : ret
    });

}

//mysql delete
export const deleteTest = async (req: Request, res: Response) => {

    const connection: any = await mysqlConnect();
    
    let query = "delete from TB_test where uid=10041";

    try{
        let [ rows, fields ] = await connection.query(query);
        ret = rows;
    }catch(err){
        console.log(err);
        message = err;
    }
    
    return res.status(200).json({
        message: message,
        result : ret
    });

}
