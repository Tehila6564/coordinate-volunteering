import Volunteer from "../Repos/VolunteerRepo.js";
import BaseService from "./BaseService.js";

class VolunteerService extends BaseService {
  constructor(Volunteer) {
    super(Volunteer);
  }
  async Create(volunteerData) {
    try {
      console.log("Volunteers service");
      return await Volunteer.create(volunteerData);
    } catch (err) {
      console.log(err);
    }
  }
}
export default new VolunteerService(Volunteer);
