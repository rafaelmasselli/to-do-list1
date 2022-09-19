import cors from "cors";
import express from "express";

import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import { data } from "./model/data";
import { routerList } from "./routes/list.routes";

const app = express();

app.use(cors());
app.use(express.json());

data();

app.use("/documentation", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/list", routerList);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
