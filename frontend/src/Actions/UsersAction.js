import axios from "axios";
import { newUserFail, newUserRequest, newUserSuccess } from "../slices/User";
import { loginFail, loginRequest, loginSuccess, userstatusFail, userstatusRequest, userstatussucces } from "../slices/Loginuser";


export const createNewUser = User => async (dispatch) => {
    try {
        dispatch(newUserRequest())
        const { data } = await axios.post(`http://127.0.0.1:8000/api/register/`, User);
        console.log(data)
        dispatch(newUserSuccess(data))
    } catch (error) {
        //handle error
        console.log(error);
        dispatch(newUserFail(error.response.data.message))
    }

}

export const LoginUser = Userdata => async (dispatch) => {
    try {
        dispatch(loginRequest);
        console.log(Userdata.get('username'));
        const { data } = await axios.post(`http://127.0.0.1:8000/api/login/`, Userdata);
        console.log('data', data)
        localStorage.setItem('token', data.Token);
        dispatch(loginSuccess(data))
    } catch (error) {
        console.log(error)
        dispatch(loginFail(error.response.data.message))
    }
}

export const user_status = user_status => async (dispatch) => {
    try {
        dispatch(userstatusRequest);
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(userstatussucces(user_status))
        }
    } catch (error) {
        dispatch(userstatusFail(error))
    }
}