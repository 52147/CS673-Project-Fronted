import axios from "axios";

// const COMMENTS_API_TEST = "http://localhost:8080";
// const COMMENTS_API = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
const COMMENTS_API_TEST = "https://shocking-tomatoes-production.up.railway.app";

export const AuthorityService = async () => {
  const response = await axios.get(COMMENTS_API_TEST + "/user");
  return response.data;
};

export const addAuthorityService = async (json) => {
  const response = await axios.post(COMMENTS_API_TEST + `/user/add`, json);
  return response.data;
};

export const deleteAuthorityService = async (json) => {
  const response = await axios.delete(COMMENTS_API_TEST + `/user/${json}`, json);
  return response.data;
};

export const importAuthorityService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST + `/user/import`, json);
    return response.data;
  };
  
  export const updateAuthorityService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST + `/user/save`, json);
    return response.data;
  };

  export const exportAuthorityService = async (json) => {
    const response = await axios.get(COMMENTS_API_TEST + `/user/export`, json);
    return response.data;
  };
  