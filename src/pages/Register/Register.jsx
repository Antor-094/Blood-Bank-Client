// import React from 'react';

import { Button, Form, Input, Radio, message } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrgHospitalForm from "./OrgHospitalForm";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import { getAntdInputValidation } from "../../utils/helpers";
// import Link from "antd/es/typography/Link";

const Register = () => {
  const [type, setType] = useState("donar");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true))
      const response = await RegisterUser({ ...values, userType: type });
      dispatch(SetLoading(false))
      if (response.success) {
        message.success(response.message);
        navigate('/login')
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false))
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
        className="bg-white rounded shadow grid p-5 gap-5 grid-cols-1 md:grid-cols-2 w-[90%] md:w-1/2"
        onFinish={onFinish}
      >
        <h1 className="md:col-span-2 uppercase text-2xl">
          <span className="text-primary">
            {type.toUpperCase()} - REGISTRATION
          </span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="md:col-span-2"
        >
          <Radio value="donar">Donar</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>
        {type === "donar" && (
          <>
            <Form.Item label="Name" name="name" rules={getAntdInputValidation()}>
              <Input  />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
              <Input  />
            </Form.Item>
            <Form.Item label="Phone" name="phone" rules={getAntdInputValidation()}>
              <Input  />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={getAntdInputValidation()}>
              <Input type="password"  />
            </Form.Item>
          </>
        )}

        {type !== "donar" && <OrgHospitalForm type={type} />}
        <Button
          type="primary"
          className="md:col-span-2"
          block
          htmlType="submit"
        >
          Register
        </Button>
        <Link
          to="/login"
          className="md:col-span-2 text-center text-gray-800 underline"
        >
          Already have a account ?
        </Link>
      </Form>
    </div>
  );
};

export default Register;
