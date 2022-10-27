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
      await OrderService.add(req.body);
      res.status(200).json("Server working on POST....");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteOrder(req, res) {
    try {
      await OrderService.delete(req.body.id);
      res.status(200).json("Server working on DELETE....");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async putOrder(req, res) {
    try {
      await OrderService.update(req.body);
      res.status(200).json("Server working on PUT....");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new OrderController();
