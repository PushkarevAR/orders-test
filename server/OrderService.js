import fs from "fs/promises";

class OrderService {
  async getAll() {
    const data = await fs.readFile("./orders.json", "utf-8");
    return JSON.parse(data);
  }

  async add(order) {
    const orders = await this.getAll();
    // ID?
    const lastId = orders[orders.length -1].id;
    order = {...order, id: lastId + 1};

    const data = [...orders, order];
    await fs.writeFile("./orders.json", JSON.stringify(data, null, 2));
    return order;
  }

  async delete(id) {
    if (!id) throw new Error("No ID");
    const orders = await this.getAll();
    const data = orders.filter((order) => order.id != id);
    await fs.writeFile("./orders.json", JSON.stringify(data, null, 2));
  }

  async update(order) {
    if (!order.id) throw new Error("No ID");
    await this.delete(order.id);
    await this.add(order);
  }
}

export default new OrderService();
