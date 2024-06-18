const HelpRequestService = require("../Services/HelpRequestService");

exports.getById = async (req, res) => {
    const { Id } = req.params;
  
    try {
      const helpRequest = await HelpRequestService.getById(Id);
      res.json(helpRequest);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.GatAll = async (req, res) => {
    try {
      const helpRequest = await HelpRequestService.GetAll()
      res.json(helpRequest);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };