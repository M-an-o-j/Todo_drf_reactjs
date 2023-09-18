import { createSlice } from '@reduxjs/toolkit'


const TodoSlices = createSlice({
    name: 'Todoslice',
    initialState: {
        loading: false,
        Todos:[]
    },
    reducers: {
        TodosRequest(state, action) {
            return {
                loading: true,
                Todos:[]
            }
        },
        TodosSuccess(state, action) {
            return {
                loading: false,
                Todos: action.payload
            }
        },
        TodosFail(state, action) {
            return {
                loading: false,
                Todos:[],
                error: action.payload
            }
        }
    }
})

const { actions, reducer } = TodoSlices;

export const { TodosRequest, TodosSuccess, TodosFail } = actions;

export default reducer;