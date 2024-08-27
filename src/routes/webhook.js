import { Router } from "express";
import { webhook } from "../controllers/webhook.js";

const router = Router();

router.post("/webhook", webhook);

export default router;
