import axios from "axios";

const stockClient = axios.create({
  baseURL: "https://groww.in/v1/api",
});

export default stockClient;
