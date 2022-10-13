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
    const res = await sitterApi.post("/api/user/login", user, {
      withCredentials: true,
    });
    return res;
  } catch (err) {
    return 400;
  }
};

export const logOut = async () => {
  try {
    const res = await sitterApi.get("/api/user/logout", {
      withCredentials: true,
    });
    return res.status;
  } catch (err) {
    return 400;
  }
};

export const getUserDetails = async () => {
  try {
    const res = await sitterApi.get("/api/user/get_details", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    return 400;
  }
};

export const addUserDetails = async (userDetails: any) => {
  try {
    const res = await sitterApi.post("/api/user/add_details", userDetails, {
      withCredentials: true,
    });
    return res.status;
  } catch (err) {
    return 400;
  }
};

export const getPetDetails = async () => {
  const res = await sitterApi.get("/api/user/pet/get_all", {
    withCredentials: true,
  });
  return res.data;
};

export const addPetDetails = async (data: any) => {
  return await sitterApi.post("/api/user/pet/add_pet", data, {
    withCredentials: true,
  });
};

export const deletePetDetails = async (id: any) => {
  return await sitterApi.delete("/api/user/pet/delete_pet", {
    params: { id: id },
    withCredentials: true,
  });
};

export const getActiveRequests = async () => {
  return await sitterApi.get("/api/user/sitter_req/get_all/active", {
    withCredentials: true,
  });
};

export const getAcceptedRequests = async () => {
  return await sitterApi.get("/api/user/sitter_req/get_all/accepted", {
    withCredentials: true,
  });
};

export const getInActiveRequests = async () => {
  return await sitterApi.get("/api/user/sitter_req/get_all/inactive", {
    withCredentials: true,
  });
};

export const deleteRequestById = async (req_id: any) => {
  return await sitterApi.delete("/api/user/sitter_req/delete_request", {
    withCredentials: true,
    params: { req_id: req_id },
  });
};

export const addSitterRequest = async (data: any) => {
  return await sitterApi.post("/api/user/sitter_req/add_request", data, {
    withCredentials: true,
  });
};

export const getResponsesById = async (req_id: any) => {
  const res = await sitterApi.get("/api/user/sitter/responses/by_id", {
    withCredentials: true,
    params: { req_id: req_id },
  });
  return res.data;
};

export const getActiveRequestsByPincode = async (pincode: any) => {
  const res = await sitterApi.get("/api/user/sitter/get_all/by_pincode", {
    withCredentials: true,
    params: { pincode: pincode },
  });
  return res.data;
};

export const addResponseById = async ({ data, req_id }: any) => {
  await sitterApi.post("/api/user/sitter/response", data, {
    withCredentials: true,
    params: { req_id: req_id },
  });
};

export const acceptResponseById = async (data: any) => {
  await sitterApi.patch("/api/user/sitter/response/accept", data, {
    withCredentials: true,
  });
};
export const addNewReview = async (data: any) => {
  await sitterApi.post("/api/user/review/add_review", data, {
    withCredentials: true,
  });
};

export const getReviewForOwner = async (sitter_id: any) => {
  const res = await sitterApi.get("/api/user/review/get_review/owner", {
    params: { sitter_id: sitter_id },
    withCredentials: true,
  });
  return res.data;
};

export const getReviewsForSitter = async () => {
  const res = await sitterApi.get("/api/user/review/get_review/sitter", {
    withCredentials: true,
  });
  return res.data;
};

export const getReviewsForSitterById = async (sitter_id: any) => {
  const res = await sitterApi.get("/api/user/review/get_review/sitter/by_id", {
    params: { sitter_id: sitter_id },
    withCredentials: true,
  });
  return res.data;
};

export const getAllReviews = async () => {
  const res = await sitterApi.get("/api/user/review/get_review/all", {
    withCredentials: true,
  });
  return res.data;
};

export const addTransaction = async (data: any) => {
  await sitterApi.post("/api/user/transaction/add", data, {
    withCredentials: true,
  });
};

export const getGeneralExpense = async () => {
  const res= await sitterApi.get("/api/user/transaction/get/general_expense", {
    withCredentials: true,
  });
  return res.data
};

export const getCustomExpense = async (data:any) => {
  const res= await sitterApi.post("/api/user/transaction/get/custom_expense",data, {
    withCredentials: true,
  });
  return res.data
};

export const getGeneralEarnings = async () => {
  const res= await sitterApi.get("/api/user/transaction/get/general_earnings", {
    withCredentials: true,
  });
  return res.data
};

export const getCustomEarnings = async (data:any) => {
  const res= await sitterApi.post("/api/user/transaction/get/custom_earnings",data, {
    withCredentials: true,
  });
  return res.data
};

export const getAllUsersForAdmin = async () => {
  const res = await sitterApi.get("/api/admin/get/all_users", {
    withCredentials: true,
  });
  return res.data;
};

export const getAllRequestsForAdmin = async () => {
  const res = await sitterApi.get("/api/admin/get/all_requests", {
    withCredentials: true,
  });
  return res.data;
};

export const getAllPetsForAdmin = async () => {
  const res = await sitterApi.get("/api/admin/get/all_pets", {
    withCredentials: true,
  });
  return res.data;
};

export const getAllTransactionsForAdmin = async () => {
  const res = await sitterApi.get("/api/admin/get/all_transactions", {
    withCredentials: true,
  });
  return res.data;
};

export const getRevenueInfoForAdmin = async () => {
  const res = await sitterApi.get("/api/admin/get/revenue_info", {
    withCredentials: true,
  });
  return res.data;
};

export default sitterApi;
