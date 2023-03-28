import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getHistoryService = async () => {
    const response = await axios.get(COMMENTS_API+"/index/check/checkIn/checkHistory")
    return response.data;
}

export const getSelectedHistoryService = async (json) => {
    const startDate = json.startDate.substring(0,10);
    const endDate = json.endDate.substring(0,10);
    const url = `/index/check/checkIn/checkHistory/FindbyDate_Exit?myParam1=${startDate}&myParam2=${endDate}`;
    //console.log(COMMENTS_API+ url);
    //await fetch(url);
    const response = await axios.post(COMMENTS_API+ url)
    return response.data;
}