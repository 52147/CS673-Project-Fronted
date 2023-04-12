import {createSlice} from "@reduxjs/toolkit";
import {getHistoryByPlateThunk, getHistoryThunk, getSelectedHistoryThunk} from "../../services/parkHistoryThunk";

const initialState = {
    loading: false,
    history: []
}


const parkHistorySlice = createSlice({
    name: 'parkHistory',
    initialState,
    extraReducers: {
        [getHistoryThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getHistoryThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
                //console.log(payload);
            },
        [getHistoryThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            },

        [getSelectedHistoryThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getSelectedHistoryThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
                //console.log(payload);
            },
        [getSelectedHistoryThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            },

        [getHistoryByPlateThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending");
            },
        [getHistoryByPlateThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
                //console.log(payload);
            },
        [getHistoryByPlateThunk.rejected]:
            (state) => {
                state.loading = false
                //console.log("reject");
            }


    },

    reducers: {
        //...
    }

});

export default  parkHistorySlice.reducer