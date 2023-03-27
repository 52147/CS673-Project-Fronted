import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './formServices'


export const updateFormThunk = createAsyncThunk(
    '/parklot/save', async () => {
        const json =  await service.updateFormService()
        return json;
    }
)


export const recordFormThunk = createAsyncThunk(
  '/parklot/appointment', async () => {
      const json =  await service.recordFormService()
      return json;
  }
)