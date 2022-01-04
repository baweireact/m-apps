import axios from 'axios';
import { bassUrl } from './config';

const service = axios.create();

service.defaults.baseURL = bassUrl;

service.interceptors.response.use((res) => {
  return res.data;
});

const common = async (config) => {
  const res = await service(config);
  return res;
};

export { common };
