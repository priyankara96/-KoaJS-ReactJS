import router from "@koa/router";
import { save, get, getAll, update, deletePost } from "../api/customerProfile.api.js";

const profileRouter = new router({
  prefix: "/cu_profile",
});

profileRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content_Type", "application.json");
  ctx.status = 201;
});

profileRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

profileRouter.get("/", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getAll();
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

profileRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

profileRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});

export default profileRouter;
