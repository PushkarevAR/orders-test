import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const utils = (store: $TSFixMe, order: $TSFixMe) => (
  <>
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'shape'.
      shape='circle'
      // @ts-expect-error TS(2304): Cannot find name 'danger'.
      danger
      // @ts-expect-error TS(2304): Cannot find name 'icon'.
      icon={<DeleteOutlined />}
      // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
      onClick={() => store.deleteOrder(order)}
    />
  </>
);

export const available = (store: $TSFixMe, order: $TSFixMe) => {
  return (
    // @ts-expect-error TS(2749): 'Checkbox' refers to a value, but is being used as... Remove this comment to see the full error message
    <Checkbox
      // @ts-expect-error TS(2304): Cannot find name 'checked'.
      checked={order.available}
      // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
      onChange={() => {
        // @ts-expect-error TS(2304): Cannot find name 'order'.
        order.setAvailable().then(() => store.fetchOrders());
      }}
    />
  );
};
