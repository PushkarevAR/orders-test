import axios from "axios";

const URL = "http://localhost:5000/orders";

const httpHandler = async (callback: $TSFixMe, req = null) => {
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
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    order.isError = err.message;
  } finally {
    return order;
  }
};

const getOrders = async () => await httpHandler(axios.get);

const addOrder = async (req: $TSFixMe) => await httpHandler(axios.post, req);

// @ts-expect-error TS(2345): Argument of type '{ data: any; }' is not assignabl... Remove this comment to see the full error message
const deleteOrder = async (req: $TSFixMe) => await httpHandler(axios.delete, { data: req });

const editOrder = async (req: $TSFixMe) => await httpHandler(axios.put, req);

const ordersAPi = {
  getOrders,
  addOrder,
  deleteOrder,
  editOrder,
}

export default ordersAPi;