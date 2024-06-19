import autobind from "autobind-decorator";

class BaseController {
  constructor() {
    autobind(this);
  }

  async getAll(req, res) {
    try {
      const volunteers = await this.Service.getAll();
      console.log("getAll");
      return res.json(volunteers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    console.log(" controller getbyid" + id);
    try {
      const responce = await this.Service.getById(id);
      res.json(responce);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default BaseController;
