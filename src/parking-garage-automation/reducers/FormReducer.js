import { createSlice } from "@reduxjs/toolkit";
import {
  updateFormThunk,
} from "../../services/formThunk";

const authoritySlice = createSlice({
  name: "updateForm",
  initialState,
  extraReducers: {
    [updateFormThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateFormThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [updateFormThunk.rejected]: (state) => {
      state.loading = false;
    },
    [updateAuthorityThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateAuthorityThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [updateAuthorityThunk.rejected]: (state) => {
      state.loading = false;
    },
    [deleteAuthorityThunk.pending]: (state) => {
      state.loading = true;
    },
    [deleteAuthorityThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
  },

  reducers: {
    //...
  },
});

export default authoritySlice.reducer;
