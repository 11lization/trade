import express from "express";
import rootRouter from "./routers/index.js";
import cors from "cors";

const app = express();
const port = 10801;

const server = async () => {
  app.get("/", (req, res) => {
    res.send(`Okay let's go`);
  });

  app.use(
    cors({
      origin: "*",
    })
  );

  app.use("/", rootRouter);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

export default server;
