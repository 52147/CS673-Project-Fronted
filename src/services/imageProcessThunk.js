import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './imageProcessServices'

export const imageProcessCarThunk = createAsyncThunk(
    '/camera-stream', async (content) => {
        const json =  await service.imageProcessService(content)
        return json;
    }
)