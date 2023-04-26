import axios from "axios";
const COMMENTS_API_TEST = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
// const COMMENTS_API = "http://localhost:8080";
const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const garageDataManagementService = async () => {
  const response = await axios.get(COMMENTS_API_TEST + "/index/garage");
  return response.data;
};