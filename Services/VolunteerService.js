const Volunteer = require("../Repos/VolunteerRepo");

exports.getVolunteersById = async (Id) => {
  return Volunteer.getVolunteerById({ Id });
};
exports.CreateNewVolunteer = async (Volunteer) => {
  return Volunteer.createNewVolunteer(Volunteer);
};
exports.getVolunteers = async () => {
  console.log("Volunteers service");
  return await Volunteer.getVolunteers();
};
