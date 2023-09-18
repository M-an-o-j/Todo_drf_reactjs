import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser, userobj } from '../Actions/UsersAction'

const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('username', username)
    formdata.append('password', password)
    console.log(formdata)
    dispatch(LoginUser(formdata))
    setPassword("")
    setUserName("")
    navigate('/')
  }

  return (
    <div className=''>
      <div className='Register mx-auto'>
        <h1 className='text-center'>Register Here:</h1>
        <form onSubmit={Login} className='d-flex flex-column p-5'>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label fw-semibold">Username</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} value={username} className="form-control" id="Title" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login