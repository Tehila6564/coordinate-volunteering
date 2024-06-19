import helpRequst from "../Models/helpRequestModel.js";
import connectDB from "../db.js";

class HelpRequstRepo {
  constructor() {
    connectDB();
  }

  async GatHelpRequestUnanswer() {
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
}
export default HelpRequstRepo;
