import express from "express";
const router = express.Router();

import HelpRequestrController from "../Controllers/HelpRequestController.js";

router.get("/", (req, res) => {
  HelpRequestrController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  HelpRequestrController.getById(req, res);
});
router.put("/", (req, res) => {
  HelpRequestrController.update(req, res);
});

export default router;
