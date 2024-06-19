import HelpRequest from "../Repos/HelpRequestRepo.js";

class HelpRequestService {
  GatHelpRequestUnanswer = async () => {
    console.log("help service");
    return HelpRequest.GatHelpRequestUnanswer();
  };
}
export default HelpRequestService;
