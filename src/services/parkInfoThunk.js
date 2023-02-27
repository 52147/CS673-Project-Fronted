import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkInfoServices'

export const getParkingInfoThunk = createAsyncThunk(
    '/index/info', async (plate) => {
        const json =  await service.getParkingInfoService(plate)
        return json;
    }
)