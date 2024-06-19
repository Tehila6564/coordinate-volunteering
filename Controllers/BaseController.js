import autoBind from "auto-bind";

class BaseController {
  constructor(Service) {
    this.Service = Service;
    autoBind(this);
  }

  async getAll(req, res) {
    try {
      const get = await this.Service.getAll();
      console.log("getAll");
      return res.json(get);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    console.log(" controller getbyid" + id);
    try {
      const responce = await this.Service.getById(id);
      return res.json(responce);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default BaseController;
