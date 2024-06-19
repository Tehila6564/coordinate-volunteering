import mongoose from "mongoose";

const Schema = mongoose.Schema;
const helpRequestSchema = new Schema({
  _id: String,
  location: Object,
  problem_description: String,
  contact_phone_number: String,
  status: String,
  number_of_people_stuck: Number,
  priority: Object,
  volunteer_code: String
 }, { versionKey: false }
);

const HelpRequest = mongoose.model(
  "HelpRequest",
  helpRequestSchema,
  "HelpRequest"
);

export default HelpRequest;
