import {createSlice} from "@reduxjs/toolkit";
import {loginThunk } from "../../services/loginThunk";
import jwtDecode from "jwt-decode";

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
                console.log("pending")
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


              //console.log("fulfilled")

              state.token = payload.token;
              state.username = payload.username;
              state.load= "fulfilled";
              console.log(decoded);
              console.log(decoded.role);

              console.log(decoded);
              localStorage.setItem('userObject', JSON.stringify(person))


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