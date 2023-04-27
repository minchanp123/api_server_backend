import express, { Router } from "express";

import {test1, test2} from "../api/test"

const router: Router = express.Router();

//get path (ex. /api/test1 )
router.get('/test1', test1); //get

//post 호출 필요
router.post('/test2', test2); //post

export default router;