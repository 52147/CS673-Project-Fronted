import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, findUserByIdThunk, } from "../../services/loginThunk";

const initialState = {
    users: "",
    password: "",
    loading: false,
    token: "",
    username: "",

}
const loginSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
 
        [loginThunk.fulfilled]:
            (state, {payload}) =>{
              state.users = "fulfilled";
              console.log("fulfilled")
              state.token = payload.token; 
              state.username = payload.username;
              console.log(state.token);
              console.log(payload);
            },
        [loginThunk.rejected]:
            (state, action) =>{
                state.users = "reject"
                console.log(action.type)
                console.log(state.users)
            },

        [findUserByIdThunk.fulfilled]:
            (state, action) => {
                state.loading = false
                state.otherUser = action.payload
                // state.users = state.users
                //     .filter(p => p._id === action.payload)
            },


        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
                // state.users = state.users
                //     .filter(p => p._id === action.payload)
            },

    },
    reducers: {
    }
});

export default loginSlice.reducer