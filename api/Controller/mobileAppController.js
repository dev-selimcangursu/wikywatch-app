const MobileApp = require('../Modal/MobileApp');

const getAllApps = async (req, res) => {
  try {
    const apps = await MobileApp.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllApps,
};
