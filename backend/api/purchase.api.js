import { randomBytes } from "crypto";
const purchase = new Map();

export const save = ({ holderName, cardNum, expDate, cvv }) => {
  const product = {
    id: randomBytes(8).toString("hex"),
    holderName,
    cardNum,
    expDate,
    cvv
  };
  purchase.set(product.id, product);
  return product;
};

export const get = (id) => {
  const product = purchase.get(id);
  if (!product) {
    throw new Error(`not found for the id ${id}`);
  }
  return product;
};

export const getAll = () => {
  return [...purchase.values()];
};

export const update = (
  id,
  { holderName,
    cardNum,
    expDate,
    cvv 
}
) => {
  if (!purchase.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const product = {
    id,
    holderName,
    cardNum,
    expDate,
    cvv
  };
  purchase.set(product.id, product);
  return product;
};

export const deletePost = (id) => {
  if (!purchase.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  purchase.delete(id);
};


