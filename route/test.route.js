import { Router } from "express";
import { testcontroller } from "../controller/test.controller.js";

const router = Router();

router.get('/test', testcontroller);

export default router;