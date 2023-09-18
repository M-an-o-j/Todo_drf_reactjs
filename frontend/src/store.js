import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import TodoReducer from './slices/TodoSlices'
import NewTodo from './slices/CreateTodo'
import NewUser from './slices/User'
import Loginuser from './slices/Loginuser'

const reducer = combineReducers({
    TodosState : TodoReducer,
    NewTodostate: NewTodo,
    NewUserState: NewUser,
    LoginUserState : Loginuser
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;