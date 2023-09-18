import { createSlice } from "@reduxjs/toolkit";


const LoginUser = createSlice({
    name: 'auth',
    initialState: {
        status: false,
        loading: true,
        isAuthenticated: false
    },
    reducers: {
        loginRequest(state, action) {
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        loginFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        userstatusRequest(state, action){
            return {
                ...state,
                status:false
            }
        },
        userstatussucces(state, action){
            return{
                ...state,
                status:true,
                user:action.payload.user
            }
        },
        userstatusFail(state, action){
            return{
                ...state,
                status:false,
                error:action.payload
            }
        }
    }
})

const { actions, reducer } = LoginUser;
export const { loginRequest, loginSuccess, loginFail, userstatusRequest, userstatussucces, userstatusFail } = actions;
export default reducer;