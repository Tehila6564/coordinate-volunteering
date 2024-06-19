import helpRequst from "../Models/helpRequestModel.js";
import connect from "../db.js";

class HelpRequstRepo {
  constructor() {
    connect();
  }
  //unAnswer
  async gatAll() {
    try {
      const help = await helpRequst
        .aggregate([{ $match: { status: "waiting" } }])
        .exec();

      if (!help) {
        let error = new Error("There is no this unanswer request");
        error.code = 404;
        throw error;
      }
      return help;
    } catch (error) {
      throw new Error("Could not find unanswereHlpRequest");
    }
  }
  async update(id, data) {
    try {
      let req = await helpRequst.findByIdAndUpdate(
        { _id: id },
        {
          statusCode: 2,
          volenteerCode: data.id,
        }
      );
      return req;
    } catch (errors) {
      console.log(errors.message);
      throw new Error(
        "An error occurred while trying to update the request's status."
      );
    }
  }
  async gatById(id) {
    try {
      const ById = await helpRequst.find([{ _id: id }]).exec();

      if (!ById) {
        let error = new Error("There is no this helpRequest with this --");
        error.code = 404;
        throw error;
      }
      return ById;
    } catch (error) {
      throw new Error("Could not find request");
    }
  }
}
export default HelpRequstRepo;
