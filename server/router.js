import { Router } from "express";
import OrderController from "./OrderController.js";

const router = new Router();

router.get("/", OrderController.getOrders);
router.post("/", OrderController.postOrder);
router.delete("/", OrderController.deleteOrder);
router.put("/", OrderController.putOrder);

export default router;
