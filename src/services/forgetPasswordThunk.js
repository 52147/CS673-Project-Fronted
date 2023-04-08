import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./forgetPassworsService";

export const forgetPasswordThunk = createAsyncThunk(
    '/username', async (user) => {
        const json =  await service.checkUsernameService(user)
        return json;
    }
)