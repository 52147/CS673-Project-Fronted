import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, findUserByIdThunk, } from "../../services/loginThunk";

const initialState = {
    users: "",
    password: "",
    loading: false,

}
const loginSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
 
        [loginThunk.fulfilled]:
            (state, action) =>{
              state.users = "fulfilled";
              console.log("fulfilled")
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