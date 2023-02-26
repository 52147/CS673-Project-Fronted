import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkInfoServices'

export const getParkingInfoThunk = createAsyncThunk(
    '/index/info', async () => {
        const json =  await service.getParkingInfoService()
        return json;
    }
)