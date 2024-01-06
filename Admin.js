import React from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

import Button from "react-bootstrap/Button";
import {useUserAuth} from "../context/UserAuthContext";

const Admin = () => {
  const { logOut, user, role } = useUserAuth();
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
      <button>
        LOGIN ADMIN
      </button>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          LOG OUT
        </Button>
      </div>
     
      <div className="p-4 box mt-3 text-center">
        WELCOME TO THE ADMIN PAGE <br />
        {user && user.email}<br/>
        Your role is : {role}
      </div>

      <Link to='/AdminToDo'>ADMIN TASKS</Link>;
     </>
  
  );
};

export default Admin;
