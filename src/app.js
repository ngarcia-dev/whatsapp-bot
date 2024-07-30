import express from "express";
import morgan from "morgan";

import webhookRouter from "./routes/webhook.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", webhookRouter);

export default app;
