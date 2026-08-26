import { Router } from "express";
import { calculate } from "../controllers/calculator.controler";

const router = Router();

router.post("/calculate", calculate);

export default router;