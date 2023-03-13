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
    extraReducers: {
        [getFeeThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getFeeThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.firstHour = payload.firstHour
                state.firstFee = payload.firstFee
                state.secondFee = payload.secondFee
                state.maxFee = payload.maxFee
                state.addition = payload.addition
            },
        [getFeeThunk.rejected]:
            (state) => {
                state.loading = false
            },

        [setFeeThunk.pending]:
            (state) => {
                state.loading = true
                console.log("pending")
            },
        [setFeeThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
            },
        [setFeeThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default  parkFeeSlice.reducer