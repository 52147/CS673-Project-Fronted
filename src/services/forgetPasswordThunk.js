import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./forgetPasswordService";

export const forgetPasswordThunk = createAsyncThunk(
    '/forget', async (user) => {
        const json =  await service.forgetPasswordService(user)
        return json;
    }
)