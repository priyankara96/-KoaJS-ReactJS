import Router from '@koa/router';
import {save,getAll} from '../api/wishlist.api.js';

const wishListRouter = new Router({
    prefix:'/wishlistitems'
});

//Add cart item route
wishListRouter.post('/',(ctx) =>{
    const data = ctx.request.body;
    const wishListItem = save(data);
    ctx.body = wishListItem;
    ctx.set('Content-Type','application/json');
    ctx.status = 201;
});

//get all items route
wishListRouter.get('/',(ctx) =>{
    ctx.body = getAll();
    ctx.set('Content-Type','application.json');
    ctx.status = 200;
});

export default wishListRouter;