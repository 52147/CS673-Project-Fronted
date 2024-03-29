import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './inputCarServices'

export const checkInCarThunk = createAsyncThunk(
    'check/checkIn', async (content) => {
        const json =  await service.checkInCarService(content)
        return json;
    }
)

export const getThunk = createAsyncThunk(
    'check/checkIn', async () => {
        const json =  await service.getService()
        return json;
    }
)

// create an id for bicycle user
export const showBicycleUserThunk = createAsyncThunk(
    '/index/check/getBicyclePlate', async () => {
        const json =  await service.bicycleUserService()
        return json;
    }
)