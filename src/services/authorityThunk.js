import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './authorityServices'


export const AuthorityThunk = createAsyncThunk(
    '/user', async () => {
        const json =  await service.AuthorityService()
        return json;
    }
)
export const updateAuthorityThunk = createAsyncThunk(
    '/user/update', async (data) => {
      const json = await service.updateAuthorityService(data)
      return json;
    }
  )
  
  export const deleteAuthorityThunk = createAsyncThunk(
    '/user/delete', async (ids) => {
      const json = await service.deleteAuthorityService(ids)
      return json;
    }
  )
