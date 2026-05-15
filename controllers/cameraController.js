const Camera = require('../models/Camera');

const addCamera = async (req, res) => {
  try {
    const { name, ip, port, username, password, streamLink } = req.body;
    // For now, we use a hardcoded user_id (1) as requested for the example user
    const userId = 1; 

    if (!name || (!ip && !streamLink)) {
      return res.status(400).json({ success: false, message: 'Name and either IP or Stream Link are required' });
    }

    const camera = await Camera.create({
      userId,
      name,
      ip,
      port,
      username,
      password,
      streamLink,
    });

    res.json({
      success: true,
      camera,
    });
  } catch (error) {
    console.error('Error adding camera:', error);
    res.status(500).json({ success: false, message: 'Server error adding camera' });
  }
};

const getCameras = async (req, res) => {
  try {
    const userId = 1; // Example user
    const cameras = await Camera.findByUserId(userId);
    res.json({
      success: true,
      cameras,
    });
  } catch (error) {
    console.error('Error fetching cameras:', error);
    res.status(500).json({ success: false, message: 'Server error fetching cameras' });
  }
};

module.exports = {
  addCamera,
  getCameras,
};
