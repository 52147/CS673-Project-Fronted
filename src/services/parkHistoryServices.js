import axios from 'axios';

const COMMENTS_API_TEST = 'http://localhost:8080'
// const COMMENTS_API = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
// const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const getHistoryService = async () => {
    const response = await axios.get(COMMENTS_API_TEST+"/index/check/checkIn/checkHistory")
    return response.data;
}

export const getSelectedHistoryService = async (json) => {
    const startDate = json.startDate.substring(0,10);
    const endDate = json.endDate.substring(0,10);
    const url = `/index/check/checkIn/checkHistory/FindbyDate_Exit?myParam1=${startDate}&myParam2=${endDate}`;
    //console.log(COMMENTS_API+ url);
    //await fetch(url);
    const response = await axios.post(COMMENTS_API_TEST+ url)
    return response.data;
}

export const getHistoryByPlateService = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API_TEST+"/index/check/checkIn/checkHistory/checkPlate",json)
    return response.data;
}