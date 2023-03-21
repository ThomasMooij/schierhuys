import express from "express"
import {verifyToken} from "../functions/jwt.js"
import {createReview, getReviews, deleteReview} from "../controllers/reviews.controller.js"

const router = express.Router()

router.post("/", verifyToken, createReview)
router.get("/", getReviews)
router.delete("/", verifyToken, deleteReview)

export default router