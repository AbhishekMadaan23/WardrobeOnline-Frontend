import axios from "axios";

const BASE_URL = "https://wardrobe-online-backend.vercel.app/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  ?.currentUser?.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmIzZjc1ZDg4YjFhNmU3YzE3NjZkYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTY0NTkxOH0.obTN9FC9oZpe7UpHtXz1CBZXe_DwofaEfK-h_SVnVNk";
console.log("token---", TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
