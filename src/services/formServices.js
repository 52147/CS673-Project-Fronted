import axios from "axios";

const COMMENTS_API = "http://localhost:8080";
export const updateFormService = async () => {
  const response = await axios.post(COMMENTS_API + "/parklot/save");
  return response.data;
};


export const recordFormService = async () => {
  const response = await axios.post(COMMENTS_API + "/parklot/appoinment");
  return response.data;
};


export const FormService = async () => {
  const response = await axios.get(COMMENTS_API + "/parklot");
  return response.data;
};