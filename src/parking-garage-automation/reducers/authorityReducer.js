import { createSlice } from "@reduxjs/toolkit";
import {
  AuthorityThunk,
  updateAuthorityThunk,
  deleteAuthorityThunk,
  importAuthorityThunk,
  exportAuthorityThunk,
  addAuthorityThunk,
} from "../../services/authorityThunk";

const initialState = {
  loading: false,
  history: [],
  mess: "123",
  
};

const authoritySlice = createSlice({
  name: "authoHistory",
  initialState,
  reducers: {
    //...
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(AuthorityThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(AuthorityThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateAuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAuthorityThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(updateAuthorityThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteAuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAuthorityThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(deleteAuthorityThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(importAuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(importAuthorityThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.history = payload;
      })
      .addCase(importAuthorityThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(exportAuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(exportAuthorityThunk.fulfilled, (state, { payload }, f) => {
        state.loading = false;
        state.history = payload;
        state.file = f;
      })
      .addCase(exportAuthorityThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addAuthorityThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAuthorityThunk.fulfilled, (state, { payload }) => {
        state.loading = true;
        console.log(state.loading)
        state.history = payload;
        console.log(state.mess)
      })
      .addCase(addAuthorityThunk.rejected, (state, { payload }) => {
        state.loading = false;
        console.log(state.loading)
        console.log(payload)
      })
  },
});

export default authoritySlice.reducer;
