import { Request, Response} from "express";

//get api
const test1 = async (req: Request, res: Response) => {
    const param = req.query;
    console.log(param);
    return res.status(200).json({
        status: 200,
        message: "test1 포스팅 조회 성공",
        //posting_number: param.blogId
    });
};

//post api
const test2 = async (req: Request, res: Response) => {
    const param = req.body;
    console.log(param);
    return res.status(200).json({
        status: 200,
        message: "test2 포스팅 조회 성공",
        //posting_number: param.blogId
    });
};

export {test1, test2};
