// import React from 'react';

import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getAntdInputValidation } from "../../utils/helpers";

// import { Form } from "antd";

const OrgHospitalForm = ({ type }) => {
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "organizationName"}
      >
        <Input />
      </Form.Item>

      <Form.Item name="owner" label="Owner" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={getAntdInputValidation()}>
        <Input />
      </Form.Item>
      <Form.Item
        name="website"
        label="Website"
        rules={getAntdInputValidation()}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={getAntdInputValidation()}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={getAntdInputValidation()}
        className="md:col-span-2"
      >
        <TextArea />
      </Form.Item>
    </>
  );
};

export default OrgHospitalForm;
