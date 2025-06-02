import { localApi } from "./api";

export const getFaqs = async () => {
  const response = await localApi.get("/faq");
  return response.data;
};
