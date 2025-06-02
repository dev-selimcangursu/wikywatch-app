import { orderApi } from "./api";

export const fetchOrderStatusService = async (orderNumber) => {
  const response = await orderApi.post("/order/status", { orderNumber });
  return response.data;
};
