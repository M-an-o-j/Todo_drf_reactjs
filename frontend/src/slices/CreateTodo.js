import { createSlice } from '@reduxjs/toolkit'


const NewTodoSlices = createSlice({
    name: 'newTodoslice',
    initialState: {
        loading: false,
        product: {}
    },
    reducers: {
        newTodoRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        newTodoSuccess(state, action) {
            return {
                ...state,
                loading: false,
                Todo: action.payload,
            }
        },
        newTodoFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }

    }
})

const { actions, reducer } = NewTodoSlices;

export const { newTodoRequest, newTodoSuccess, newTodoFail } = actions;

export default reducer;