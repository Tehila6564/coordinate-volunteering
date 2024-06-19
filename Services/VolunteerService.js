import Volunteer from "../Repos/VolunteerRepo.js";
class VolunteerService {
  getVolunteersById = async (Id) => {
    console.log("Volunteers service" + Id);
    return Volunteer.getVolunteerById(Id);
  };
  CreateNewVolunteer = async (volunteerData) => {
    console.log("Volunteers service");
    return await Volunteer.createNewVolunteer(volunteerData);
  };
  getVolunteers = async () => {
    return await Volunteer.getVolunteers();
  };
}
export default VolunteerService;
