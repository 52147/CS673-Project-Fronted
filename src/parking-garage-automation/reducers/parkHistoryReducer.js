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
            },
        [getHistoryThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
            },
        [getHistoryThunk.rejected]:
            (state) => {
                state.loading = false
            },

        [getSelectedHistoryThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getSelectedHistoryThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
            },
        [getSelectedHistoryThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default  parkHistorySlice.reducer