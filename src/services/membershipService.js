import axios from 'axios';

// const COMMENTS_API_TEST = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
// const COMMENTS_API_TEST = 'http://localhost:8080'
const COMMENTS_API_TEST = "https://shocking-tomatoes-production.up.railway.app";

export const getMembershipByPlate = async (plate) => {
    const response = await axios.post(COMMENTS_API_TEST+"/check/index/check/checkIn/checkPermitByPlate",plate)
    return response.data;
}

export const getMembershipById = async (username) => {
    const response = await axios.post(COMMENTS_API_TEST+"/check/index/check/checkIn/checkPermitByUserId",username)
    return response.data;
}

export const getAllMembership = async () => {
    const response = await axios.post(COMMENTS_API_TEST+"/index/check/checkIn/checkMemberHistory")
    return response.data;
}

export const purchaseMembership = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API_TEST+"/check/index/check/checkIn/purchasePermit/Successful",json)
    return response.data;
}
