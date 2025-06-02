import { localApi } from './api'; 

export const fetchProductsAPI = async () => {
  const response = await localApi.get('/products'); 
  return response.data; 
};
