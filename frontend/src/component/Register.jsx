import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewUser } from '../Actions/UsersAction'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const AddUser = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('email',email)
        formdata.append('password', password)
        console.log(formdata)
        dispatch(createNewUser(formdata))
        setEmail("");
        setPassword("")
        setUserName("")
        navigate('/login')
    }


    return (
        <>
            <div className=''>
                <div className='Register mx-auto'>
                    <h1 className='text-center'>Register Here:</h1>
                    <form onSubmit={AddUser} className='d-flex flex-column p-5'>
                        <div className="mb-3">
                            <label htmlFor="Title" className="form-label fw-semibold">Username</label>
                            <input type="text" onChange={(e) => setUserName(e.target.value)} value={username} className="form-control" id="Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='form-control' id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' name="password" id="password"/>
                        </div>
                        <button type="submit"  className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register