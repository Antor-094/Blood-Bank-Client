/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [type, setType] = useState("donar");

  const onFinish = (values) => {
    console.log(values);
  };
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

        <Form.Item label="Email" name="email">
          <Input required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
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
