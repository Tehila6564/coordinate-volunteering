import HelpRequestService from "../Services/HelpRequestService.js";
import BaseController from "./BaseController.js";

class HelpRequestController extends BaseController {
  constructor(HelpRequestService) {
    super(HelpRequestService);
  }
  async update(req, res, next) {
    const { id } = req.params;
    try {
      const response = await HelpRequestService.update(id, req.body);
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }
}
export default HelpRequestController;
