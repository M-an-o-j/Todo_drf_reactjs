import React from 'react'
import GetTodo from '../component/GetTodo'
import PostTodo from '../component/PostTodo'

const Home = () => {
    return (
        <>
            <div className='row myaxis'>
                <div className='col-4'>
                    <PostTodo />
                </div>
                <div className='col-8'>
                    <GetTodo />
                </div>
            </div>
        </>
    )
}

export default Home