import { randomBytes } from "crypto";
const profiles = new Map();

export const save = ({ cu_full_name, cu_email, cu_phone_number, cu_password }) => {
  const profile = {
    id: randomBytes(8).toString("hex"),
    cu_full_name, 
    cu_email, 
    cu_phone_number, 
    cu_password
  };
  profiles.set(profile.id, profile);
  return profile;
};

export const get = (id) => {
  const profile = profiles.get(id);
  if (!profile) {
    throw new Error(`not found for the id ${id}`);
  }
  return profile;
};

export const getAll = () => {
  return [...profiles.values()];
};

export const update = (
  id,
  { cu_full_name, cu_email, cu_phone_number, cu_password }
) => {
  if (!profiles.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  const profile = {
    id,
    cu_full_name, 
    cu_email, 
    cu_phone_number, 
    cu_password
  };
  profiles.set(profile.id, profile);
  return profile;
};

export const deletePost = (id) => {
  if (!profiles.has(id)) {
    throw new Error(`not found for the id ${id}`);
  }
  profiles.delete(id);
};
