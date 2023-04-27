import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import apiRouter from "./router/apiRouter";
import daoRouter from "./router/daoRouter";
import dotenv from "dotenv"
dotenv.config()

const allowedOrigins = ['http://localhost:8080']; // 허락하는 요청 주소

const corsOption: cors.CorsOptions = { //cors 허용
  origin: allowedOrigins,
  credentials: true
};

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors(corsOption));//cors 옵션 추가

app.set("port", process.env.SERVER_PORT); //웹서버 3000포트
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/dao", daoRouter);

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});

export default app;