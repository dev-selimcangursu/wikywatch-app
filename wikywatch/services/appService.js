import { localApi } from "./api";

export const fetchAppsAPI = async () => {
  const response = await localApi.get("/mobile-apps");
  return response.data;  // sadece data döner
};
