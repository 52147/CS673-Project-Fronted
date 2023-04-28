import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkHistoryServices'
// import {getHistoryByPlateService} from "./parkHistoryServices";


export const getHistoryThunk = createAsyncThunk(
    '/index/check/checkIn/checkHistory', async () => {
        const json =  await service.getHistoryService()
        return json;
    }
)

export const getSelectedHistoryThunk = createAsyncThunk(
    '/index/check/checkIn/checkHistory', async (date) => {
        const json =  await service.getSelectedHistoryService(date)
        return json;
    }
)

export const getHistoryByPlateThunk = createAsyncThunk(
    '/checkHistoryByPlate', async (plate) => {
        const json =  await service.getHistoryByPlateService(plate)
        return json;
    }
)



