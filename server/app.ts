import Express from "express";
import itemRouter from "./routes/item_routes";
import cors from "cors";
import { errorHandlerMiddleware } from "./controllers/errors";
const app = Express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(cors());
app.use(Express.json());
app.use("/api/items", itemRouter);

app.use(errorHandlerMiddleware);
export default app;
