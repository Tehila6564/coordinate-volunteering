import volunteer from "../Models/volunteerModel.js";
import connect from "../db.js";

class VolunteerRepo {
  constructor(volunteer) {
    this.volunteer = volunteer;
    connect();
  }

  async getAll() {
    try {
      const volunteers = await volunteer.find({}).exec();
      console.log(`len:${volunteers.length}`);

      return volunteers;
    } catch (error) {
      throw new Error("Could not fetch volunteers");
    }
  }

  async getById(id) {
    try {
      const vol = await volunteer.findById(id);
      if (!vol) {
        let error = new Error("There is no this user");
        error.code = 404;
        throw error;
      }
      return vol;
    } catch (error) {
      throw new Error("Could not find volunteer");
    }
  }
  async create(volunteerData) {
    try {
      const newVolunteer = await volunteer.create(volunteerData);
      if (newVolunteer) {
        console.log(`created newVolunteer: ${newVolunteer}`);
        return newVolunteer.id;
      } else {
        throw new Error("there is no data for this request");
      }
    } catch (errors) {
      throw errors;
    }
  }
}

export default new VolunteerRepo(volunteer);
