import express from "express";
const router = express.Router();
import { sendEmail } from "../controllers/email.controller.js";

router.post("/send", sendEmail);

export default router;
