import React from 'react'
import { useParams,  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateTask = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [task, setTask] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUser/ "+id)
      .then((result) => console.log(result),
    setName(result.data.name),
    setEmail(result.data.email),
    setAge(result.data.age),
    setTask(result.data.task)
)
      .catch((err) => console.log(err));
  },[]);

  const update = (e) =>{
    e.preventDefault();
    axios
      .post("http://localhost:4000/updateUser/"+id, { name, email, age, task })
      .then((result) => {
        console.log(result);
        navigate("/");
  })

    const {id} = useParams()
  return (
    <div>
        <form onSubmit={update}>
          <h1>Update users task</h1>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Task</label>
            <input type="text" placeholder='Enter Name' className='form-control' value={task} onChange={(e)=>setTask(e.target.value)} />
          </div>
          <button className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default UpdateTask;