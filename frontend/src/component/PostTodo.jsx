import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNewTodo } from '../Actions/TodosActions';

const PostTodo = () => {
    const [Title, setTitle] = useState("");
    const [Detail, setDetail] = useState("");
    const dispatch = useDispatch();

    const Addtodo = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('Title', Title);
        formdata.append('Detail', Detail)
        console.log(formdata);
        console.log([{'Title':Title,'Detail':Detail}]);
        dispatch(createNewTodo(formdata))
        setTitle("")
        setDetail("")
    }


    return (
        <>
            <div className='fixed-component'>
                <form onSubmit={Addtodo} className='d-flex flex-column p-5'>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label fw-semibold">Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} className="form-control" id="Title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Detail" className="form-label fw-semibold">Detail</label>
                        <textarea onChange={(e) => setDetail(e.target.value)} value={Detail} className='form-control' name="detail" id="Detail" cols="30" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default PostTodo