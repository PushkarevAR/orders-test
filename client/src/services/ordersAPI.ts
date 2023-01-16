import axios from 'axios';

const URL: string = 'http://localhost:5000/orders';

const httpHandler: $TSFixMeFunction = async (callback, req = null) => {
  const order = {
    isLoading: true,
    isError: false,
    isSuccess: false,
    data: [],
  };

  try {
    const res = req ? await callback(URL, req) : await callback(URL);
    order.isLoading = false;
    order.isSuccess = true;
    order.data = res.data;
  } catch (err: any) {
    order.isLoading = false;
    order.isError = err.message;
  } finally {
    return order;
  }
};

const getOrders: $TSFixMeFunction = async () => await httpHandler(axios.get);

const addOrder: $TSFixMeFunction = async (req) =>
  await httpHandler(axios.post, req);

const deleteOrder: $TSFixMeFunction = async (req) =>
  await httpHandler(axios.delete, { data: req });

const editOrder: $TSFixMeFunction = async (req) =>
  await httpHandler(axios.put, req);

const ordersAPi = {
  getOrders,
  addOrder,
  deleteOrder,
  editOrder,
};

export default ordersAPi;
