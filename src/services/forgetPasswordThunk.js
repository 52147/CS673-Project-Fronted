import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./forgetPassworsService";
// import {changePasswordService} from "./forgetPassworsService";

export const forgetPasswordThunk = createAsyncThunk(
    '/username', async (user) => {
        const users={
            username:user
        }
        const json =  await service.checkUsernameService(users)
        return json;
    }
)

export const changePasswordThunk = createAsyncThunk(
    '/username', async (user) => {
        const json =  await service.changePasswordService(user)
        return json;
    }
)

