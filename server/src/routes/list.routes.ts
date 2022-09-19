import { Router } from "express";

import { getListController } from "../controller/List/getList.controller";
import { getUniqueListController } from "../controller/List/getUniqueList.controller";
import { createListController } from "../controller/List/createList.controller";
import { deleteListController } from "../controller/List/deleteList.controller";
import { updateListController } from "../controller/List/updateList.controller";

import { validId } from "../middleware/validID";
import { validBodyList } from "../middleware/validList";

const ValidBodyList = new validBodyList().handle;
const ValidId = new validId().handle;

const routerList = Router();

routerList.get("/", new getListController().handle);
routerList.get("/:id", ValidId, new getUniqueListController().handle);
routerList.post("/create", ValidBodyList, new createListController().handle);
routerList.delete("/delete/:id", ValidId, new deleteListController().handle);
routerList.patch("/update/:id", ValidId, ValidBodyList, new updateListController().handle);

export { routerList };
