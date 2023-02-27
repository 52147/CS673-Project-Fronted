import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkHistoryServices'
import {getHistoryService} from "./parkHistoryServices";

export const getHistoryThunk = createAsyncThunk(
    '/index/check/checkIn/checkHistory', async () => {
        const json =  await service.getHistoryService()
        return json;
    }
)