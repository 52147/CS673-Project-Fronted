import {createSlice} from "@reduxjs/toolkit";
import {AuthorityThunk} from "../../services/authorityThunk";

const initialState = {
    loading: false,
    history: []
}

const authoritySlice = createSlice({
    name: 'parkHistory',
    initialState,
    extraReducers: {
        [AuthorityThunk.pending]:
            (state) => {
                state.loading = true
            },
        [AuthorityThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.history = payload
            },
        [AuthorityThunk.rejected]:
            (state) => {
                state.loading = false
            }


    },

    reducers: {
        //...
    }

});

export default  authoritySlice.reducer