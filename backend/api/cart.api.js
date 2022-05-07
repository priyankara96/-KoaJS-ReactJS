import { randomBytes } from "crypto";
const cartItems = new Map();

export const save = ({ itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty }) => {
  const cartItem = {
    id: randomBytes(8).toString("hex"),
    itemID,
    itemName,     
    itemDesc,
    itemPrice,
    batchNo,
    manuDate,
    expDate,
    Qty
  };
  cartItems.set(cartItem.id, cartItem);
  return cartItem;
};

export const get = (id) => {
  const cartItem = cartItems.get(id);
  if (!cartItem) {
    throw new Error(`not found for the id ${id}`);
  }
  return cartItem;
};

export const getAll = () => {
  return [...cartItems.values()];
};

export const update = (
  id,
  { itemID,itemName,itemDesc,itemPrice,batchNo,manuDate,expDate,Qty }
) => {
  if (!cartItems.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const cartItem = {
    id,
    itemID,
    itemName,     
    itemDesc,
    itemPrice,
    batchNo,
    manuDate,
    expDate,
    Qty,
  };
  cartItems.set(cartItem.id, cartItem);
  return cartItem;
};

export const deletePost = (id) => {
  if (!cartItems.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  cartItems.delete(id);
};
