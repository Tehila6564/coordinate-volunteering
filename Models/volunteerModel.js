import mongoose from "mongoose";
const Schema = mongoose.Schema;
const volunteerSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    volunteer_code: String,
    first_name: String,
    last_name: String,
    phone_number: String,
    internship_types: Array,
  },
  { versionKey: false }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema, "Volunteers");

export default Volunteer;
