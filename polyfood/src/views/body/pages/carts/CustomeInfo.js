import React from "react";
import { Button, Form, Input, Select } from "antd";
import Address from "./Address";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const CustomeInfo = () => {
  const { TextArea } = Input;

  const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        formRef.current?.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        formRef.current?.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
        break;
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Họ và tên: "
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Địa chỉ"
        rules={[
          {
            required: true,
          },
        ]}
        // className="overflow-hidden"
      >
        <Address />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Điện thoại"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="note"
        label="Ghi chú"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        {/* <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
    </Form>
  );
};
export default CustomeInfo;
