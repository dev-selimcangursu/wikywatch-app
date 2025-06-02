import { localApi } from './api'

export const fetchSalesPointsAPI = async () => {
  const response = await localApi.get('/sales-points');
  return response.data;
};
