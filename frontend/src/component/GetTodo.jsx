import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getTodos } from '../Actions/TodosActions'

const GetTodo = () => {
    const { loading, Todos } = useSelector((state) => state.TodosState)
    const dispatch = useDispatch()
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const Tododata = Todos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(Todos.length / pageSize);
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    const deleteData = async (id) => {
        const Token = localStorage.getItem('token')
        const data = await axios.delete(`http://127.0.0.1:8000/api/person/?id=${id}`, {
            headers: {
                Authorization: `Token ${Token}`
            }
        })
        console.log(data.data)
    }

    useEffect(() => {
        dispatch(getTodos)
    }, [dispatch])

    return (
        <>
            <div className=''>
                {Tododata && Tododata.map((dataa, index) => (
                    <div className='bg-todo p-2 mb-2 border border-dark rounded-3 d-flex justify-content-between' key={index}>
                        <div>
                            <h1 className='display-6'>{dataa.Title}</h1>
                            <p>{dataa.Detail}</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <button className='mb-2 rounded-3 p-2 bg-danger' onClick={() => deleteData(dataa.id)}>Delete</button>
                            <button className=' rounded-3 p-2 bg-secondary'>Update</button>
                        </div>
                    </div>
                ))}
            </div>
            {
                totalPages > 1 ?

                < div className='w-full'>
                    <button onClick={() => handlePageChange(currentPage - 1)} className='me-2 btn btn-success'>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} className='ms-2 btn btn-success'>Next</button>
                </div > : null

            }
        </>
    )
}

export default GetTodo;