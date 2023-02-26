import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkHistoryServices'
import {getHistoryService} from "./parkHistoryServices";

export const getHistoryThunk = createAsyncThunk(
    'check/checkIn', async () => {
        const json =  await service.getHistoryService()
        return json;
    }
)