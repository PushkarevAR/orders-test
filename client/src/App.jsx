import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { DeleteOutlined } from '@ant-design/icons';
import { StoreContext } from '.';
import { Table, Button, Checkbox } from 'antd';
import AddOrder from './components/AddOrder';
import { getSnapshot } from 'mobx-state-tree';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'available',
    dataIndex: 'available',
    key: 'available',
    align: 'center',
  },
  {
    title: 'customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'utils',
    dataIndex: 'utils',
    key: 'utils',
    align: 'center',
  },
];

const App = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.fetchOrders();
  }, []);

  const utils = (order) => (
    <>
      <Button
        shape='circle'
        danger
        icon={<DeleteOutlined />}
        onClick={() => store.deleteOrder(order)}
      />
    </>
  );

  const available = (order) => {
    console.log('test: ', order.available);
    return (
      <Checkbox
        checked={order.available ? true : false}
        onChange={() => order.setAvailable()}
      />
    );
  };

  const dataSource = [];
  store.orders.forEach((order) => {
    dataSource.push({
      ...order,
      key: order.id,
      available: available(order),
      utils: utils(order),
    });
  });

  return (
    <div
      style={{
        marginTop: '42px',
      }}
    >
      <AddOrder />
      <Table
        dataSource={dataSource}
        columns={columns}
        size='small'
        bordered
        style={{
          width: '800px',
          margin: 'auto',
          marginTop: '42px',
        }}
      />
    </div>
  );
});

export default App;
