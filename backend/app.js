import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import cors from "@koa/cors";

import customerProfileRouter from "./router/customerProfile.router.js";
import cartRouter from "./router/cart.router.js";
import purchaseRouter from "./router/purchase.router.js";
import wishlistRouter from "./router/wishlist.router.js";

import itemRouter from "./router/item.router.js";
import promotionsRouter from "./router/promotions.router.js";
import traderProfileRouter from "./router/traderProfile.router.js";

const app = new Koa();
app.use(
    cors({
      origin: "*",
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    })
  );
app.use(bodyParser());

app.use(cartRouter.routes()).use(cartRouter.allowedMethods());
app.use(customerProfileRouter.routes()).use(customerProfileRouter.allowedMethods());
app.use(purchaseRouter.routes()).use(purchaseRouter.allowedMethods());
app.use(wishlistRouter.routes()).use(wishlistRouter.allowedMethods());

app.use(itemRouter.routes()).use(itemRouter.allowedMethods());
app.use(promotionsRouter.routes()).use(promotionsRouter.allowedMethods());
app.use(traderProfileRouter.routes()).use(traderProfileRouter.allowedMethods());

app.use(ctx =>{
    ctx.set('Content-Type','text/html');
    ctx.body = '<h3>Not found</h3>';
    ctx.status = 404;
});

app.listen(8000,() =>{
    console.log(`App is running on port 8000`);
});