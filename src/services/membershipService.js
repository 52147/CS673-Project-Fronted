import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getMembershipById = async (username) => {
    const response = await axios.post(COMMENTS_API+"/check/index/check/checkIn/checkPermitByUserId",username)
    return response.data;
}

export const getAllMembership = async () => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkIn/checkMemberHistory")
    return response.data;
}

export const purchaseMembership = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API+"/check/index/check/checkIn/purchasePermit/Successful",json)
    return response.data;
}
