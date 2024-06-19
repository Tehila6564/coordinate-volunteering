import express from "express";
import VolunteerController from "../Controllers/VolunteerController.js";

const router = express.Router();

router.get("/", VolunteerController.getAll);

router.get("/:id", VolunteerController.getById);

router.post("/", VolunteerController.Create);
export default router;
