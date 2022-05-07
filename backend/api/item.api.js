import { randomBytes } from "crypto";
const products = new Map();

export const save = ({ item_name, item_price, itme_desription, item_brand, item_type, }) => {
  const product = {
    id: randomBytes(8).toString("hex"),
    item_name,
    item_price,
    itme_desription,
    item_brand,
    item_type
  };
  products.set(product.id, product);
  return product;
};

export const get = (id) => {
  const product = products.get(id);
  if (!product) {
    throw new Error(`not found for the id ${id}`);
  }
  return product;
};

export const getAll = () => {
  return [...products.values()];
};

export const update = (
  id,
  { item_name, item_price, itme_desription, item_brand, item_type }
) => {
  if (!products.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const product = {
    id,
    item_name,
    item_price,
    itme_desription,
    item_brand,
    item_type,
  };
  products.set(product.id, product);
  return product;
};

export const deletePost = (id) => {
  if (!products.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  products.delete(id);
};
