import { createSlice } from "@reduxjs/toolkit";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  deleteAuthorityThunk,
  importAuthorityThunk,
  exportAuthorityThunk,
} from "../../services/authorityThunk";

const initialState = {
  loading: false,
  history: [],
  fil: null
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
    [importAuthorityThunk.pending]: (state) => {
      state.loading = true;
    },
    [importAuthorityThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.history = payload;
    },
    [importAuthorityThunk.rejected]: (state) => {
      state.loading = false;
    },
    [exportAuthorityThunk.pending]: (state) => {
      state.loading = true;
    },
    [exportAuthorityThunk.fulfilled]: (state, { payload }, f) => {
      state.loading = false;
      state.history = payload;
      state.file = f;
    },
    [exportAuthorityThunk.rejected]: (state) => {
      state.loading = false;
    },
  },

  reducers: {
    //...
  },
});

export default authoritySlice.reducer;
