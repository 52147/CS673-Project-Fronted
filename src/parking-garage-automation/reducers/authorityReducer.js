import {createSlice} from "@reduxjs/toolkit";
import {getAuthorityThunk} from "../../services/authorityThunk";

const initialState = {
    loading: false,
    history: []
}

const authoritySlice = createSlice({
    name: 'parkHistory',
    initialState,
    extraReducers: {
        [getAuthorityThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getAuthorityThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
            },
        [getAuthorityThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default  authoritySlice.reducer