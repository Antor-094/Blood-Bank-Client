// import React from 'react';

import { message } from "antd";
import { GetCurrentUser } from "../apicalls/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUserName } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../redux/usersSlice";

const ProtectedPage = ({ children }) => {
    const {currentUser} = useSelector((state)=>state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        message.success(response.message);
        dispatch(SetCurrentUser(response.data))
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };



  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    currentUser && (
      <div>
        {currentUser && <h1> Welcome {getLoggedInUserName(currentUser)}</h1>}
        {children}
      </div>
    )
  );
};

export default ProtectedPage;
