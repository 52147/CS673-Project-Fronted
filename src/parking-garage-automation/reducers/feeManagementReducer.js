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
                //console.log("pending")
            },
        [getFeeThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.firstHour = payload.content.hour
                state.firstFee = payload.content.firstPrice
                state.secondFee = payload.content.secondPrice
                state.maxFee = payload.content.maxPrice
                state.addition = payload.content.comment
                //console.log("fulfilled")
                //console.log(state.secondFee)
            },
        [getFeeThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject")
            },

        [setFeeThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending")
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