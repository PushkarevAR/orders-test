import OrderService from "./OrderService.js";

class OrderController {
  async getOrders(req, res) {
    try {
      const orders = await OrderService.getAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async postOrder(req, res) {
    try {
      const order = req.body;
      const newOrder = await OrderService.add(order);
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteOrder(req, res) {
    try {
      const order = req.body;
      await OrderService.delete(order.id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async putOrder(req, res) {
    try {
      const order = req.body;
      await OrderService.update(order);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new OrderController();
