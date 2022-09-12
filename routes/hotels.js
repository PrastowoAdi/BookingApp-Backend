import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

import {
  updateHotel,
  createHotel,
  deleteHotel,
  getHotels,
  getHotel,
  countCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getHotels);

router.get("/countByCity", countCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
