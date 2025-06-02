import axios from "axios";


const localApi = axios.create({
  baseURL: "http://192.168.75.147:3000/api",
});


const orderApi = axios.create({
  baseURL: "http://imfexim.loopsoft.app/admin",
});

export { localApi, orderApi };
