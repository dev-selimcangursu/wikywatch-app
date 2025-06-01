const express = require('express');
const router = express.Router();
const { getAllApps } = require('../Controller/mobileAppController');

router.get('/', getAllApps);

module.exports = router;
