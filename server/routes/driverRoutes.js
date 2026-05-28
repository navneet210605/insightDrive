const express = require('express');
const { getDrivers, createDriver } = require('../controllers/driverController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getDrivers);
router.post('/', protect, authorizeRoles('admin'), createDriver);

module.exports = router;
