import express, { Router } from "express";

import * as mongo from "../dao/mongo/collection_1"
import * as mysql from "../dao/mysql/table_1"

const router: Router = express.Router();

//mongoDB api path (ex. /dao/mongo/selectTest )
router.get('/mongo/selectTest', mongo.selectTest); //select test
router.post('/mongo/insertTest', mongo.insertTest); //insert test
router.post('/mongo/deleteTest', mongo.deleteTest); //delete test
router.get('/mongo/multi_select', mongo.selectTestMulti);

//mysql api path (ex. /dao/mysql/selectTest )
router.get('/mysql/selectTest', mysql.selectTest); //select test
router.post('/mysql/insertTest', mysql.insertTest); //insert test
router.post('/mysql/deleteTest', mysql.deleteTest); //delete test

export default router;