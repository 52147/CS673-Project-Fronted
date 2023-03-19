import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './loginServices'

export const loginThunk = createAsyncThunk(
    '/login',
    async (user) => {
        const loginResult = await service.login(user)
        return {
            username: user.username,
            ...loginResult,
        }
    }
)
