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
export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () => {
        const users =  await service.findUsers()
        return users;
    }
)
export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async (userId) => {
        const user =  await service.findUserById(userId)
        return user
    })