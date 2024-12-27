import { Router } from "express";
import { testcontroller } from "../controller/test.controller.js";
import { geminiContrller } from "../controller/gemini.controller.js";

const router = Router();

router.get('/test', testcontroller);
router.post("/gemini",geminiContrller)

export default router;