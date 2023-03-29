import {createSlice} from "@reduxjs/toolkit";
import {loginThunk } from "../../services/loginThunk";
import jwtDecode from "jwt-decode";
import {useState} from "react";

const user = localStorage.getItem('userObject') != null? JSON.parse(localStorage.getItem('userObject')):[]
const name = localStorage.getItem('nameObject') != null? JSON.parse(localStorage.getItem('nameObject')):[]

const initialState = {
    users: user,
    password: "",
    loading: false,
    token: "",
    username: name,
    load: "",
    decode: "",

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
                const person = {
                    username:decoded.username,
                    role: decoded.role,
                    exp: decoded.exp
                }

              state.token = payload.token; 
              state.username = payload.username;
              console.log(state.username);
              console.log(state.token);
              console.log(payload);

              //console.log("fulfilled")

              state.token = payload.token;
              state.username = payload.username;
              state.load= "fulfilled";
              console.log(decoded);
              localStorage.setItem('userObject', JSON.stringify(person))
              localStorage.setItem('nameObject', JSON.stringify(state.username))
                state.decode = decoded;

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