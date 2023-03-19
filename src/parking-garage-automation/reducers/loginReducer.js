import {createSlice} from "@reduxjs/toolkit";
import {loginThunk } from "../../services/loginThunk";
import jwtDecode from "jwt-decode";
import {useState} from "react";

const user = localStorage.getItem('userObject') != null? JSON.parse(localStorage.getItem('userObject')):[]

const initialState = {
    users: user,
    password: "",
    loading: false,

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
              state.users = "fulfilled";
                const token = payload.token;
                const decoded = jwtDecode(token);
              console.log("fulfilled")
              console.log(decoded);
              localStorage.setItem('userObject', JSON.stringify("fulfilled"))


            },
        [loginThunk.rejected]:
            (state, action) =>{
                state.users = "reject"
                console.log("rejected")
                console.log(action.type)
            },

    },
    reducers: {
    }
});

export default loginSlice.reducer