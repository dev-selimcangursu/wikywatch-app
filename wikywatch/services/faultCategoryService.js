import { localApi } from "./api";

export const getFaultCategories = () => {
  return localApi.get("/fault-categories");
};
