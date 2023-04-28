import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './feeManagementServices'


export const getFeeThunk = createAsyncThunk(
    'checkPrice', async (type) => {
        //console.log(type)
        const json =  await service.getFeeService(type)
        return json;
    }
)

export const setFeeThunk = createAsyncThunk(
    'changePrice', async (setValue) => {
        //console.log(setValue)
        const json =  await service.setFeeService(setValue)
        return json;
    }
)