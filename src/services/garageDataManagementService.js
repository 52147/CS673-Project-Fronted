import axios from "axios";

const COMMENTS_API = "http://localhost:8080";
export const garageDataManagementService = async () => {
  const response = await axios.get(COMMENTS_API + "/index/garage");
  return response.data;
};