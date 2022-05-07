import router from "@koa/router";
import { save, get, getAll, update, deletePost } from "../api/traderProfile.api.js";

const tprofileRouter = new router({
  prefix: "/tra_profile",
});

tprofileRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content_Type", "application.json");
  ctx.status = 201;
});

tprofileRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

tprofileRouter.get("/", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getAll();
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

tprofileRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content_Type", "application.json");
  ctx.status = 200;
});

tprofileRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});

export default tprofileRouter;
