import axios from "axios";

const sitterApi = axios.create({
  baseURL: "http://localhost:8081",
});

export const registerUser = async (user: any) => {
  try {
    const res = await sitterApi.post("/api/user/register", user);
    return res.status;
  } catch (err) {
    return 400;
  }
};

export const loginUser = async (user: any) => {
  try {
    const res = await sitterApi.post("/api/user/login", user);
    return res.status;
  } catch (err) {
    return 400;
  }
};

export const getUserDetails = async () => {
  try {
    const res = await sitterApi.get("/api/user/get_details");
    return res;
  } catch (err) {
    return 400;
  }
};

export default sitterApi;
