import { create } from "axios";
export const axiosRequests = create({
  baseURL: "https://primecoderapi.herokuapp.com/api/v1",
  headers: { "Content-Type": "application/json" },
});

axiosRequests.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
