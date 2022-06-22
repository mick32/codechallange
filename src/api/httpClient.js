import axios from "axios";

export const httpClient = axios.create({
  baseURL: `https://www.roastmarket.de/api`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  timeout: 30000,
});
