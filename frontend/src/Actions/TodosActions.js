import axios from 'axios';
import { TodosFail, TodosRequest, TodosSuccess } from '../slices/TodoSlices';
import { newTodoFail, newTodoRequest, newTodoSuccess } from '../slices/CreateTodo';


export const getTodos = async (dispatch) => {
    try {
        const IsToken = localStorage.getItem('token')

        if (IsToken) {
            dispatch(TodosRequest())
            const { data } = await axios.get('http://127.0.0.1:8000/api/person/', {
                headers: {
                    Authorization: `Token ${IsToken}`
                }
            })
            dispatch(TodosSuccess(data))
        }

    } catch (error) {
        dispatch(TodosFail(error.response.data.message))
    }
}

export const createNewTodo = TodoData => async (dispatch) => {

    try {
        const IsToken = localStorage.getItem('token')
        if (IsToken) {
            dispatch(newTodoRequest())
            console.log(TodoData)
            const { data } = await axios.post(`http://127.0.0.1:8000/api/person/`, TodoData,{
                headers: {
                    Authorization: `Token ${IsToken}`
                }
            });
            console.log(data)
            dispatch(newTodoSuccess(data))
        }
    } catch (error) {
        //handle error
        console.log(error);
        dispatch(newTodoFail(error.response.data.message))
    }

}