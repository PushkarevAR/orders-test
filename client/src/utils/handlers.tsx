import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';

export const utils: $TSFixMeFunction = (store, order) => (
  <>
    <Button
      shape='circle'
      danger
      icon={<DeleteOutlined />}
      onClick={() => store.deleteOrder(order)}
    />
  </>
);

export const available: $TSFixMeFunction = (store, order) => {
  return (
    <Checkbox
      checked={order.available}
      onChange={() => {
        order.setAvailable().then(() => store.fetchOrders());
      }}
    />
  );
};
