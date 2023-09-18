import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token')

    const logout = async(token)=> {
        const data = await axios.post('http://127.0.0.1:8000/api/logout/',null,{
            headers:{
                Authorization: `Token ${token}`
            }
        })
        console.log(data)
        localStorage.removeItem('token')
    }

    return (
        <>
            <div className='d-flex justify-content-between align-items-center p-3 bg'>
                <div>
                    <h1 className='display-6 fw-bold'>Todo</h1>
                </div>
                <div className='d-flex list-unstyled'>
                    <li className='ms-4 fw-semibold '><Link className='text-decoration-none text-dark' to={'/'}>Home</Link></li>
                    {
                        token ?
                            <button className='ms-4 fw-semibold text-decoration-none text-dark' onClick={()=>logout(token)}>Logout</button>
                            :
                            <>
                                <li className='ms-4 fw-semibold '><Link className='text-decoration-none text-dark' to={'/register'}>Register</Link></li>
                                <li className='ms-4 fw-semibold '><Link className='text-decoration-none text-dark' to={'/login'}>Login</Link></li>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Header