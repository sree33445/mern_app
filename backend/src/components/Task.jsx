import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Task = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="header">
      <Link to="/create" className="btn btn-success">
        Add
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.task}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
