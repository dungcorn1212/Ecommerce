import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.157.11:8080/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
