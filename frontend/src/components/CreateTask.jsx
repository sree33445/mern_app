import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [task, setTask] = useState("");
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createTask", { name, email, age, task })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>Add users task</h1>
        <div className="mb-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Age</label>
          <input
            type="text"
            placeholder="Enter Age"
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Task</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
