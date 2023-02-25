import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, findUserByIdThunk, } from "../../services/loginThunk";

const initialState = {
    users: [],
    loading: false,
    currentUser: null,
    error:null,
}
const loginSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
 
        [loginThunk.fulfilled]:
            (state, action) =>{
              state.currentUser = action.payload;
            },
        [loginThunk.rejected]:
            (state, action) =>{
                state.error = action.payload
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