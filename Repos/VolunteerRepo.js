const volunteer = require("../Models/volunteerModel");
const connectDB = require("../db");
class VolunteerRepo {
  constructor(volunteer) {
    this.volunteer = volunteer;
    connectDB();
  }

  async getVolunteers() {
    try {
      const volunteers = await volunteer.find({}).exec();
      console.log(`len:${volunteers.length}`);

      return volunteers;
    } catch (error) {
      throw new Error("Could not fetch volunteers");
    }
  }

  async getVolunteerById(id) {
    try {
      const volunteer = await volunteer.findById(id);
      return volunteer;
    } catch (error) {
      throw new Error("Could not find volunteer");
    }
  }

  async createNewVolunteer(volunteerData) {
    try {
      const newVolunteer = new volunteer(volunteerData);
      const savedVolunteer = await newVolunteer.save();
      console.log(`created newVolunteer: ${newVolunteer}`);
      return savedVolunteer;
    } catch (error) {
      throw new Error("Could not create new volunteer");
    }
  }
}

module.exports = new VolunteerRepo(volunteer);
