import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
//   baseURL: "https://click-down-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
