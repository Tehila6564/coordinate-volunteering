const express = require("express");
const router = express.Router();

const VolunteerController = require("../Controllers/VolunteerController");

router.get("/", (req, res) => {
  VolunteerController.getVolunteers(req, res);
});

router.get("/:id", (req, res) => {
  VolunteerController.getVolunteersById(req, res);
});

router.post("/", (req, res) => {
  VolunteerController.CreateNewVolunteer(req, res);
});

module.exports = router;
