import express from "express";
import registerDataController from "../../controller/registerDataController.js";
// import {
//   getDataController,
//   getAlldataController,
//   getMyDataController,
// } from "../../controller/dataController";

const dataRouter = express.Router();

// dataRouter.use('/data',data);

dataRouter.use("/registerData", registerDataController);

// dataRouter.get("/page/:ind", getDataController);

// dataRouter.get("/page", getAlldataController);

// dataRouter.get("/mydata", getMyDataController);

export default dataRouter;
