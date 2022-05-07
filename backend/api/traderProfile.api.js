import { randomBytes } from "crypto";
const tprofiles = new Map();

export const save = ({ tr_full_name, tr_email, tr_phone_number, tr_password }) => {
  const tprofile = {
    id: randomBytes(8).toString("hex"),
    tr_full_name, 
    tr_email, 
    tr_phone_number, 
    tr_password
  };
  tprofiles.set(tprofile.id, tprofile);
  return tprofile;
};

export const get = (id) => {
  const tprofile = tprofiles.get(id);
  if (!tprofile) {
    throw new Error(`not found for the id ${id}`);
  }
  return tprofile;
};

export const getAll = () => {
  return [...tprofiles.values()];
};

export const update = (
  id,
  { tr_full_name, tr_email, tr_phone_number, tr_password }
) => {
  if (!tprofiles.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const tprofile = {
    id,
    tr_full_name, 
    tr_email, 
    tr_phone_number, 
    tr_password
  };
  tprofiles.set(tprofile.id, tprofile);
  return tprofile;
};

export const deletePost = (id) => {
  if (!tprofiles.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  tprofiles.delete(id);
};
