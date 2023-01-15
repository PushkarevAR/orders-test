import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const utils = (store, order) => (
  <>
    <Button
      shape='circle'
      danger
      icon={<DeleteOutlined />}
      onClick={() => store.deleteOrder(order)}
    />
  </>
);

export const available = (store, order) => {
  return (
    <Checkbox
      checked={order.available}
      onChange={() => {
        order.setAvailable().then(() => store.fetchOrders());
      }}
    />
  );
};
