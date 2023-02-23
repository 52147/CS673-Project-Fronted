import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './parkInfoServices'

export const getThunk = createAsyncThunk(
    '/index/info', async () => {
        const json =  await service.getService()
        return json;
    }
)