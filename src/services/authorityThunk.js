import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './authorityServices'


export const AuthorityThunk = createAsyncThunk(
    '/user', async () => {
        const json =  await service.AuthorityService()
        return json;
    }
)