import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './garageDataManagementService'


export const garageDataManagementThunk = createAsyncThunk(
    '/user', async () => {
        const json =  await service.garageDataManagementService()
        return json;
    }
)