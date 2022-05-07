import { randomBytes } from "crypto";
const promotions = new Map();

export const save = ({ promoID,promoName,promoDesc,promoDate }) => {
  const promotion = {
    id: randomBytes(8).toString("hex"),
    promoID,
    promoName,
    promoDesc,
    promoDate
  };
  promotions.set(promotion.id, promotion);
  return promotion;
};

export const get = (id) => {
  const promotion = promotions.get(id);
  if (!promotion) {
    throw new Error(`not found for the id ${id}`);
  }
  return promotion;
};

export const getAll = () => {
  return [...promotions.values()];
};

export const update = (
  id,
  { promoID,promoName,promoDesc,promoDate }
) => {
  if (!promotions.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const promotion = {
    id,
    promoID,
    promoName,
    promoDesc,
    promoDate
  };
  promotions.set(promotion.id, promotion);
  return promotion;
};

export const deletePost = (id) => {
  if (!promotions.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  promotions.delete(id);
};
