import {createSlice} from "@reduxjs/toolkit";
import {checkOutCarThunk} from "../../services/checkOutCarThunk";

const initialState = {
    loading: false,
    checkOutMsg:''
}

const checkOutCarSlice = createSlice({
    name: 'checkOutCars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(checkOutCarThunk.pending, (state) => {
          state.loading = true;
          console.log('pending');
        })
        .addCase(checkOutCarThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.checkOutMsg = 'success';
          console.log(payload);
        })
        .addCase(checkOutCarThunk.rejected, (state) => {
          state.loading = false;
          state.checkOutMsg = 'fail';
          console.log(state.checkOutMsg);
        });
    },
});

export default checkOutCarSlice.reducer
