import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '.';
import { Table } from 'antd';
import AddOrder from './components/AddOrder';
import { columns } from './utils/columConfig';
import { utils, available } from './utils/handlers';

const App = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataSource: Array<any> = [];
  store.orders.forEach((order) => {
    dataSource.push({
      ...order,
      key: order.id,
      available: available(store, order),
      utils: utils(store, order),
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
