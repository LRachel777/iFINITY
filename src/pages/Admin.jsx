import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";


const Admin = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="p-4 box mt-3 text-center">
      Hello Welcome to the ADMIN Page <br />
      {user && user.email}<br/>
      <button><Link to={"/AddToDo"}>ADMIN ADD TASKS</Link></button>
      <button><Link to={"/ToDoList"}>ADMIN TASK STATUS</Link></button>

      </div>
      <div className="d-grid gap-2 justify-center">
        <button onClick={handleLogout}> <Link to='/' className='ml-6'>HOME</Link> </button>
      </div>
    </>  

  )
}

export default Admin;