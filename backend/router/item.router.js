import router from "@koa/router";
import { save, get, getAll, update, deletePost } from "../api/item.api.js";

const postsRouter = new router({
  prefix: "/addProduct",
});

postsRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content_Type", "application.json");
  ctx.status = 201;
});

postsRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

postsRouter.get("/", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getAll();
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

postsRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

postsRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});

export default postsRouter;
