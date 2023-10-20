import express from "express"
import { verifyToken } from "../functions/jwt"
import { getUnavailables, setUnavailables, unSetUnavailables } from "../controllers/unavailables.controller"


const router = express.Router()

router.get("/unavailable" , getUnavailables)
router.put("/unavailable" ,verifyToken, unSetUnavailables)
router.put("/setUnavailable" , setUnavailables)

export default router