import express from "express"
import Room from "../models/room.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom,updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
    
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom); 
router.put("/availability/:id",updateRoomAvailability);   
//get
router.get("/:id", getRoom); 
    
//getall
router.get("/", getRooms);

export default router;