import axios from "axios";

const COMMENTS_API = "http://localhost:8080";
export const AuthorityService = async () => {
  const response = await axios.get(COMMENTS_API + "/user");
  return response.data;
};

export const updateAuthorityService = async (json) => {
  const response = await axios.post(COMMENTS_API + `/user`, json);
  return response.data;
};

export const deleteAuthorityService = async (json) => {
  const response = await axios.delete(COMMENTS_API + `/user/${json}`, json);
  return response.data;
};

export const importAuthorityService = async (json) => {
    const response = await axios.post(COMMENTS_API + `/user/import`, json);
    return response.data;
  };
  export const exportAuthorityService = async (json) => {
    const response = await axios.get(COMMENTS_API + `/user/export`, json);
    return response.data;
  };