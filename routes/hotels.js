import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

import {
  updateHotel,
  createHotel,
  deleteHotel,
  getHotels,
  getHotel,
} from "../controllers/hotel.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotel);

router.get("/", getHotels);

export default router;
