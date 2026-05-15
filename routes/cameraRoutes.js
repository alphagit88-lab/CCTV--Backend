const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cameraController');

router.post('/', cameraController.addCamera);
router.get('/', cameraController.getCameras);

module.exports = router;
