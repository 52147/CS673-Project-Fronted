import {createSlice} from "@reduxjs/toolkit";
import {getHistoryThunk, getSelectedHistoryThunk} from "../../services/parkHistoryThunk";

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
                //console.log(payload.content);
            },
        [getSelectedHistoryThunk.rejected]:
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