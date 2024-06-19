import HelpRequest from "../Repos/HelpRequestRepo.js";
import BaseService from "./BaseService.js";
class HelpRequestService extends BaseService {
  constructor(HelpRequest) {
    super(HelpRequest);
  }

  async update(id, id_vol) {
    try {
      return await HelpRequest.update(id, id_vol);
    } catch (errors) {
      console.log(errors);
      throw new Error("unable to update request.");
    }
  }
}
export default new HelpRequestService(HelpRequest);
