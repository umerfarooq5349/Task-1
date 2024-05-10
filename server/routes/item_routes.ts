import Express from "express";
import {
  deleteItem,
  getItem,
  updateItem,
} from "../controllers/item_controller";
const { getItems, addItem } = require("../controllers/item_controller");

const itemRouter = Express.Router();

itemRouter.route("/").get(getItems).post(addItem);
itemRouter.route("/:id").put(updateItem).delete(deleteItem).get(getItem);

export default itemRouter;
