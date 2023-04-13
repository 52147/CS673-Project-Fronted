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

export const clientrecordFormService = async (json) => {
  console.log(json)

  const response = await axios.get(COMMENTS_API + `/parklot/appointment/showUser?userName=${json}`, json);
  return response.data;
};

export const appointmentFormService = async (json) => {

  const response = await axios.get(COMMENTS_API + "/parklot/appointment/showAll", json);
  return response.data;
};


export const resetFormService = async (json) => {

  const response = await axios.post(COMMENTS_API + "/parklot/reset", json);
  return response.data;
};

export const safeFormService = async (json) => {
  const url = `/parklot/save?date=${json.result}&license=${json.carPlate}&name=${json.username}`;
  console.log(url)
  console.log(json.withCarType)
  const response = await axios.post(COMMENTS_API + url, json.withCarType);
  return response.data;
};