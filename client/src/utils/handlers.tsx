import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';

export const utils = (store: $TSFixMe, order: $TSFixMe) => (
  <Button
    shape='circle'
    danger
    icon={<DeleteOutlined />}
    onClick={() => store.deleteOrder(order)}
  />
);

export const available = (store: $TSFixMe, order: $TSFixMe) => {
  return (
    <Checkbox
      checked={order.available}
      onChange={() => {
        order.setAvailable().then(() => store.fetchOrders());
      }}
    />
  );
};
