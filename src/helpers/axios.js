import axios from "axios";

export const baseURL = "http://192.168.8.105:8080";

const api = axios.create({ baseURL });

export default api;