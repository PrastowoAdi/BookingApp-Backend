import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailabillity,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailabillity);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", getRoom);

router.get("/", getRooms);

export default router;
