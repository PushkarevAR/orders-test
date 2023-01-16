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

  const dataSource: $TSFixMe = [];
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
        // @ts-expect-error TS(2322): Type '({ title: string; dataIndex: string; key: st... Remove this comment to see the full error message
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
