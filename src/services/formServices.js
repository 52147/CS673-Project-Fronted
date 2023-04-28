import axios from "axios";
const COMMENTS_API_TEST = "http://localhost:8080";
// const COMMENTS_API = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
// const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const updateFormService = async () => {
  const response = await axios.post(COMMENTS_API_TEST + "/parklot/save");
  return response.data;
};


export const recordFormService = async () => {
  const response = await axios.post(COMMENTS_API_TEST + "/parklot/appoinment");
  return response.data;
};


export const FormService = async () => {
  const response = await axios.get(COMMENTS_API_TEST + "/parklot");
  return response.data;
};

export const clientrecordFormService = async (json) => {
  console.log(json)

  const response = await axios.get(COMMENTS_API_TEST + `/parklot/appointment/showUser?userName=${json}`, json);
  return response.data;
};

export const appointmentFormService = async (json) => {

  const response = await axios.get(COMMENTS_API_TEST + "/parklot/appointment/showAll", json);
  return response.data;
};


export const resetFormService = async (json) => {

  const response = await axios.post(COMMENTS_API_TEST + "/parklot/reset", json);
  return response.data;
};

export const safeFormService = async (json) => {
  const url = `/parklot/save?date=${json.result}&license=${json.carPlate}&name=${json.username}`;
  console.log(url)
  console.log(json.withCarType)
  const response = await axios.post(COMMENTS_API_TEST + url, json.withCarType);
  return response.data;
};