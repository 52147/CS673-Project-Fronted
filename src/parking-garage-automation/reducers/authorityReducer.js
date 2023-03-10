import { createSlice } from "@reduxjs/toolkit";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  deleteAuthorityThunk,
} from "../../services/authorityThunk";

const initialState = {
  loading: false,
  history: [],
};

const authoritySlice = createSlice({
  name: "authoHistory",
  initialState,
  extraReducers: {
    [AuthorityThunk.pending]: (state) => {
      state.loading = true;
    },
    [AuthorityThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [AuthorityThunk.rejected]: (state) => {
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
    [deleteAuthorityThunk.rejected]: (state) => {
      state.loading = false;
    },
  },

  reducers: {
    //...
  },
});

export default authoritySlice.reducer;
