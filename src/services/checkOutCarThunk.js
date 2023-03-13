import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './checkOutCarServices'



export const checkOutCarThunk = createAsyncThunk(
    'check/checkIn', async (content) => {
        const json =  await service.checkOutCarServices(content)
        return json;
    }
)

