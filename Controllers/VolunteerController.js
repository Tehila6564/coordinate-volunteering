import volunteerService from "../Services/VolunteerService.js";
import BaseController from "./BaseController.js";

class VolunteerController extends BaseController {
  constructor(volunteerService) {
    super(volunteerService);
  }

  async Create(req, res) {
    try {
      const newVolunteer = await volunteerService.Create(req.body);
      console.log("newVolunteer controller");
      return res.status(200).json(newVolunteer);
    } catch (err) {
      console.log("error create controller");
      return res.status(500).json(err);
    }
  }

}
export default new VolunteerController(volunteerService);
