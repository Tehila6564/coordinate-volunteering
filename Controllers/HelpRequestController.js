import HelpRequestService from "../Services/HelpRequestService.js";
import BaseController from "./BaseController.js";

class HelpRequestController extends BaseController {
  constructor(HelpRequestService) {
    super(HelpRequestService);
  }
  async update(req, res, next) {
    const { id } = req.params;
    let id_vol = req.body;
    try {
      const response = await HelpRequestService.update(id, id_vol);
      return res.status(200).json(response);
    } catch (e) {
      next(e);
      console.log(e);
    }
  }
}
export default new HelpRequestController(HelpRequestService);
