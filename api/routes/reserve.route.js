import express from "express"
import {verifyToken} from "../functions/jwt.js"
import {intent , getReserves, getUnavailables, confirm } from "../controllers/reserve.controller.js"

const router = express.Router()

router.post("/create-payment-intent", intent)
router.get("/", verifyToken, getReserves)
router.get("/unavailables" , getUnavailables)
router.put("/" , confirm)

export default router