const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  volunteer_code: String,
  name: {
    first_name: String,
    last_name: String,
  },
  phone_number: String,
  internship_types: [String],
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema, "Volunteers");

module.exports = Volunteer;
