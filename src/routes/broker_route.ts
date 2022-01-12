import { brokerController } from "../controllers/broker_controller";
import { Router } from "express";

const router = Router();
router.post("/", brokerController)
export default router;