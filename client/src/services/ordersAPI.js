import axios from "axios";

const URL = "http://localhost:5000/orders";

const httpHandler = async (callback, req = null) => {
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
  } catch (err) {
    order.isLoading = false;
    order.isError = err.message;
  } finally {
    // console.log("from client API: ", order);
    return order;
  }
};

export const getOrders = async () => await httpHandler(axios.get);

export const addOrder = async (req) => await httpHandler(axios.post, req);

export const deleteOrder = async (req) =>
  await httpHandler(axios.delete, { data: req });

export const editOrder = async (req) => await httpHandler(axios.put, req);
