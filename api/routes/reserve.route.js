import express from "express"
import {verifyToken} from "../functions/jwt.js"
import {intent , getReserves, getReserve , deleteReserve, confirm } from "../controllers/reserve.controller.js"

const router = express.Router()

router.post("/create-payment-intent", intent)
router.get("/", verifyToken, getReserves)
router.get("/:id", verifyToken, getReserve)
router.delete("/:id", verifyToken, deleteReserve)
router.put("/" , confirm)

export default router