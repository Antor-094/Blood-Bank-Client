/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { Button, Form, Input, Radio, message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import { getAntdInputValidation } from "../../utils/helpers";

const Login = () => {
  const [type, setType] = useState("donar");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onFinish =  async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await LoginUser(values);
      dispatch(SetLoading(false));
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token",response.data)
        navigate('/')
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex h-screen items-center p-3 justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid p-5 gap-5 grid-cols-1 w-[90%] md:w-1/3"
        onFinish={onFinish}
      >
        <h1 className=" uppercase text-2xl">
          <span className="text-primary">
            {type.toUpperCase()} - LOGIN
          </span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className=""
        >
          <Radio value="donar">Donar</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
          <Input  />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={getAntdInputValidation()}>
          <Input type="password"  />
        </Form.Item>

        <Button
          type="primary"
          className=""
          block
          htmlType="submit"
        >
          Login
        </Button>
        <Link
          to="/register"
          className=" text-center text-gray-800 underline"
        >
          Don't have a account ? register
        </Link>
      </Form>
    </div>
  );
};

export default Login;
