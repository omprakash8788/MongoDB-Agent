import express from "express";
import { getAnswer } from "../controllers/aiController";
const router = express.Router();

router.post("/ask", getAnswer);

export default router;
