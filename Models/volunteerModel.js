const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  volunteer_code: {
    type: String,
    required: true,
  },
  name: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
  },
  phone_number: {
    type: String,
    required: true,
  },
  internship_types: {
    type: [String],
    required: true,
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

const getVolunteers = async () => {
  try {
    const volunteers = await Volunteer.find();
    return volunteers;
  } catch (error) {
    throw new Error("Could not fetch volunteers");
  }
};

const getVolunteerById = async (id) => {
  try {
    const volunteer = await Volunteer.findById(id);
    return volunteer;
  } catch (error) {
    throw new Error("Could not find volunteer");
  }
};

const createNewVolunteer = async (volunteerData) => {
  try {
    const newVolunteer = new Volunteer(volunteerData);
    const savedVolunteer = await newVolunteer.save();
    return savedVolunteer;
  } catch (error) {
    throw new Error("Could not create new volunteer");
  }
};

module.exports = {
  Volunteer,
  getVolunteers,
  getVolunteerById,
  createNewVolunteer,
};
