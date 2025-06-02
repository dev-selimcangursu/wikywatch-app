import { localApi } from "./api";

export const getBoxContent = async () => {
  const response = await localApi.get("/box-content");
  return response.data;
};
