import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './registerServices'

export const parkingRegisterThunk = createAsyncThunk(
    '/register', async (user) => {
        const json =  await service.parkingRegisterService(user)
        return json;
    }
)