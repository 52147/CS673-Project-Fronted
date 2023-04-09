import { isAnyOf, createSlice } from "@reduxjs/toolkit";
import { getHistoryThunk, getSelectedHistoryThunk } from "../../services/parkHistoryThunk";

const initialState = {
    loading: false,
    history: []
}

const parkHistorySlice = createSlice({
    name: 'parkHistory',
    initialState,
    reducers: {
        // ...
    },
    extraReducers(builder) {
        builder
            .addMatcher(
                isAnyOf(getHistoryThunk.pending, getSelectedHistoryThunk.pending),
                (state) => {
                    state.loading = true;
                }
            )
            .addMatcher(
                isAnyOf(getHistoryThunk.fulfilled, getSelectedHistoryThunk.fulfilled),
                (state, action) => {
                    state.loading = false;
                    state.history = action.payload;
                }
            )
            .addMatcher(
                isAnyOf(getHistoryThunk.rejected, getSelectedHistoryThunk.rejected),
                (state) => {
                    state.loading = false;
                }
            );
    },
});


export default  parkHistorySlice.reducer