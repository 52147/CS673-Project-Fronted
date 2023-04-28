import {createSlice} from "@reduxjs/toolkit";
import {getFeeThunk, setFeeThunk} from "../../services/feeManagementThunk";

const initialState = {
    loading: false,
    firstHour:'1',
    firstFee:'2',
    secondFee:'3',
    maxFee:'4',
    addition:'123'
}

const parkFeeSlice = createSlice({
    name: 'parkFee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getFeeThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(getFeeThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.firstHour = payload.content.hour;
          state.firstFee = payload.content.firstPrice;
          state.secondFee = payload.content.secondPrice;
          state.maxFee = payload.content.maxPrice;
          state.addition = payload.content.comment;
        })
        .addCase(getFeeThunk.rejected, (state) => {
          state.loading = false;
        })
        .addCase(setFeeThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(setFeeThunk.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(setFeeThunk.rejected, (state) => {
          state.loading = false;
        });
    },
});

export default  parkFeeSlice.reducer