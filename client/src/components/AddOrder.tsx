import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
import { StoreContext } from '..';

const AddOrder = () => {
  const store = useContext(StoreContext);

  const onFinish: $TSFixMeFunction = (values) => {
    const newOrder = {
      ...values,
      date: values.date.toISOString().split('T')[0],
      available: values.available ? true : false,
    };
    console.log('Success:', newOrder);
    store.addOrder(newOrder);
  };
  const onFinishFailed: $TSFixMeFunction = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div
      style={{
        width: '400px',
        margin: 'auto',
      }}
    >
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input order name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Weight'
          name='weight'
          rules={[
            {
              required: true,
              message: 'Please input weight!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='available'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Available</Checkbox>
        </Form.Item>

        <Form.Item
          label='Date'
          name='date'
          rules={[
            {
              required: true,
              message: 'Please input date!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label='Customer'
          name='customer'
          rules={[
            {
              required: true,
              message: 'Please input customer!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddOrder;
