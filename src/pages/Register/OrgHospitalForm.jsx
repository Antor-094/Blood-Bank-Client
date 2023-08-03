// import React from 'react';

import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

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

      <Form.Item name="owner" label="Owner">
        <Input required/>
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input required/>
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input required />
      </Form.Item>
      <Form.Item name="website" label="Website">
        <Input required />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input type="password" required/>
      </Form.Item>
      <Form.Item name="address" label="Address" className="md:col-span-2">
        <TextArea required/>
      </Form.Item>
    </>
  );
};

export default OrgHospitalForm;
