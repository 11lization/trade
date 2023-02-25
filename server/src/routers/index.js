import express from "express";
import dataRouter from "./data/index.js";
// import { authMiddleWare } from "../core/crypto/jwt";

const rootRouter = express.Router();

// rootRouter에서 indexing해주는 것. rootRouter의 시작은 server.js에 있다.
rootRouter.use("/data", dataRouter);

export default rootRouter;
