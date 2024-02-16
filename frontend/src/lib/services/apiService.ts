import axios, {
  AxiosInstance,
} from "axios";
import toast from "react-hot-toast";
import { removeCache,getCache } from "../../utils/cache";

const clientApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_ENDPOINT,
  headers: { "Content-Type": "application/json",Authorization:`Bearer ${getCache("token")}` },
});

clientApi.interceptors.response.use(
  (response) => {
    const { config, data } = response;

    // Check if the request method is POST, PUT, or DELETE
    if (config.method === "post" || config.method === "put" || config.method === "delete") {
      toast.success(data.status);
    }

    return data;
  },
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      if(error.response.status === 401) {
        removeCache('token');
        removeCache('admin');
      }
      toast.error(error.response.data.message.message);
    } else {
      toast.error(error);
    }
  }
);

export default clientApi;
