import volunteerService from "../Services/VolunteerService.js";
import BaseController from "./BaseController.js";

class VolunteerController extends BaseController {
  constructor(volunteerService) {
    super(volunteerService);
  }

  async CreateNewVolunteer(req, res) {
    try {
      const newVolunteer = await volunteerService.CreateNewVolunteer(req.body);
      console.log("newVolunteer controller");
      return res.status(200).json(newVolunteer);
    } catch (err) {
      console.log("error create controller");
      res.status(500).json({ message: err.message });
    }
  }
}
export default VolunteerController;
