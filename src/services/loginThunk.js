import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './loginServices'

export const loginThunk = createAsyncThunk(
    '/login',
    async (user) => await service.login(user)
)
