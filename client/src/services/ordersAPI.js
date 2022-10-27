import axios from "axios";

const URL = "http://localhost:5000/orders";

export const getOrders = async () => {
  try {
    const res = await axios.get(URL);
    return  res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addOrder = async (order) => {
  try {
    await axios.post(URL, order);
  } catch (err) {
    console.log(err);
  }
};

export const deleteOrder = async (order) => {
  try{
    await axios.delete(URL, {data: order} )
  } catch (err) {
    console.log(err);
  }
}

export const editOrder = async (order) => {
  try{
    await axios.put(URL, {...order, name: order.name + 1});
  } catch (err) {
    console.log(err);
  }
}