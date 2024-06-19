import express from "express";
import VolunteerController from "../Controllers/VolunteerController.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("route");
  VolunteerController.getAll;
});
router.get("/:id", (req, res) => {
  VolunteerController.getById(req, res);
});

router.post("/", (req, res) => {
  VolunteerController.CreateNewVolunteer(req, res);
});
export default router;
