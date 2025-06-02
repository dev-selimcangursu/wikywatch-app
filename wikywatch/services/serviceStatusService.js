import { orderApi } from './api';

export const fetchServiceStatusAPI = async (serviceNumber) => {
  const response = await orderApi.post(`/service/status?serviceNumber=${serviceNumber}`);
  return response.data;
};
