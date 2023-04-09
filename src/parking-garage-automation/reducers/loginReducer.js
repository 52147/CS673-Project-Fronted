import {createSlice} from "@reduxjs/toolkit";
import {loginThunk } from "../../services/loginThunk";
import jwtDecode from "jwt-decode";
import {useState} from "react";

const user = localStorage.getItem('userObject') != null? JSON.parse(localStorage.getItem('userObject')):[]
const name = localStorage.getItem('nameObject') != null? JSON.parse(localStorage.getItem('nameObject')):[]
const tok = localStorage.getItem('tokenObject') != null? JSON.parse(localStorage.getItem('tokenObject')):[]

const initialState = {
    users: user,
    password: "",
    loading: false,
    token: tok,
    username: name,
    load: "",
    decode: "",
}

const loginSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginThunk.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.users = "fulfilled";
          const token = payload.token;
          const decoded = jwtDecode(token);
          const person = {
            username: decoded.username,
            role: decoded.role,
            exp: decoded.exp
          };
          state.token = payload.token;
          state.username = payload.username;
          console.log(state.username);
          console.log(state.token);
          console.log(payload);
          state.token = payload.token;
          state.username = payload.username;
          state.load = "fulfilled";
          console.log(decoded);
          localStorage.setItem('userObject', JSON.stringify(person));
          localStorage.setItem('nameObject', JSON.stringify(state.username));
          localStorage.setItem('tokenObject', JSON.stringify(state.token));
          state.decode = decoded;
        })
        .addCase(loginThunk.rejected, (state, action) => {
          state.loading = false;
          state.load = "reject";
          console.log("rejected");
          console.log(action.type);
        });
    }
});

export default loginSlice.reducer