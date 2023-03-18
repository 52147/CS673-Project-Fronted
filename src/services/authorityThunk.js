import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from './authorityServices'


export const AuthorityThunk = createAsyncThunk(
    '/user', async () => {
        const json =  await service.AuthorityService()
        return json;
    }
)
export const addAuthorityThunk = createAsyncThunk(
    '/user/add', async (data) => {
      const json = await service.addAuthorityService(data)
      return json;
    }
  )

  export const updateAuthorityThunk = createAsyncThunk(
    '/user/save', async (data) => {
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
  

  export const importAuthorityThunk = createAsyncThunk(
    '/user/import', async (file) => {
      const json = await service.importAuthorityService(file)
      return json;
    }
  )

  export const exportAuthorityThunk = createAsyncThunk(
    '/user/export', async (ids) => {
      const json = await service.exportAuthorityService(ids)
      return json;
    }
  )