const volunteerService = require("../Services/VolunteerService");

exports.getVolunteersById = async (req, res) => {
  const { id } = req.params;

  try {
    const volunteers = await volunteerService.getVolunteersById(id);
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await volunteerService.getVolunteers();
    return res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.CreateNewVolunteer = async (req, res) => {
  try {
    const newVolunteer = await volunteerService.CreateNewVolunteer(req.body);
    console.log("newVolunteer");
    res.json(newVolunteer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
