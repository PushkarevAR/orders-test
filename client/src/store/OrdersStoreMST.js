import { types, flow, destroy } from 'mobx-state-tree';
import ordersAPi from '../services/ordersAPI';

export const Order = types
  .model("Order", {
    name: types.string,
    weight: types.string,
    date: types.string,
    available: types.boolean,
    customer: types.string,
    id: types.number,
  })
  .actions((self) => {
    const setAvailable = flow(function* setAvailable() {
      const resp = yield ordersAPi.editOrder(self);
      self.available = resp.available;
    });
    const setCustomer = flow(function* setCustomer() {
      const resp = yield ordersAPi.editOrder(self);
      self.customer = resp.customer;
    });
    return {
      setAvailable,
      setCustomer,
    };
  });

  export const OrdersStoreMST = types
  .model("OrdersStoreMST", {
    orders: types.array(Order),
  })
  .actions((self) => {
    const fetchOrders = flow(function* fetchOrders() {
      const resp = yield ordersAPi.getOrders();
      self.orders.push(...resp);
    });
    const addOrder = flow(function* addOrder(order) {
      const resp = yield ordersAPi.addOrder(order);
      self.todos.push(resp);
    });
    const deleteOrder = flow(function* deleteOrder(order) {
      yield ordersAPi.deleteOrder(order);
      destroy(order);
    });
    return {
      fetchOrders,
      addOrder,
      deleteOrder,
    };
  });
