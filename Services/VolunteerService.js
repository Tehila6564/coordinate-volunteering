const Volunteer = require("../Models/volunteerModel");

exports.getVolunteersById = async (Id) => {
  return Volunteer.getVolunteerById({ Id });
};
exports.CreateNewVolunteer = async (Volunteer) => {
  return Volunteer.createNewVolunteer(Volunteer);
};

exports.getVolunteers = async () => {
  return Volunteer.getVolunteers();
};
