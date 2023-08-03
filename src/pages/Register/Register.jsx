// import React from 'react';

import { Button, Form, Input } from "antd";

const Register = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid p-5 gap-5 grid-cols-1 md:grid-cols-2 w-[90%] md:w-1/2"
      >
        <h1 className="md:col-span-2 uppercase text-2xl">
          <span className="text-primary">Register</span>
          <hr />
        </h1>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Password">
          <Input />
        </Form.Item>
        <Button type="primary" className="md:col-span-2" block>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
