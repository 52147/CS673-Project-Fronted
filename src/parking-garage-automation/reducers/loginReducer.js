import {createSlice} from "@reduxjs/toolkit";
import {loginThunk } from "../../services/loginThunk";
import jwtDecode from "jwt-decode";
import {useState} from "react";

const user = localStorage.getItem('userObject') != null? JSON.parse(localStorage.getItem('userObject')):[]

const initialState = {
    users: user,
    password: "",
    loading: false,
    token: "",
    username: "",
    load: "",

}
const loginSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {

        [loginThunk.pending]:
            (state) => {
                state.loading = true
                //console.log("pending")
            },
        [loginThunk.fulfilled]:
            (state, {payload}) =>{
              state.load = "fulfilled";
              console.log(state.load)
                const token = payload.token;
                const decoded = jwtDecode(token);
              console.log("fulfilled")

              state.token = payload.token; 
              state.username = payload.username;
              console.log(state.token);
              console.log(payload);

              console.log(decoded);
              localStorage.setItem('userObject', JSON.stringify("fulfilled"))



            },
        [loginThunk.rejected]:
            (state, action) =>{
                state.load = "reject"
                console.log("rejected")
                console.log(action.type)
            },

    },
    reducers: {
    }
});

export default loginSlice.reducer