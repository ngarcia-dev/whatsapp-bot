import { Router } from "express";
import { webhook } from "../controllers/webhook.js";

const router = Router();

router.post("/webhook", webhook);

router.get("/webhook", (req, res) => {
  res.send("Webhook");
});

export default router;
