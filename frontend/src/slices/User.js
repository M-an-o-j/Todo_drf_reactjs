import { createSlice } from '@reduxjs/toolkit'


const NewUserSlices = createSlice({
    name: 'CreateUserSlice',
    initialState: {
        loading: false,
        product: {}
    },
    reducers: {
        newUserRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        newUserSuccess(state, action) {
            return {
                ...state,
                loading: false,
                User: action.payload,
            }
        },
        newUserFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }

    }
})

const { actions, reducer } = NewUserSlices;

export const { newUserRequest, newUserSuccess, newUserFail } = actions;

export default reducer;