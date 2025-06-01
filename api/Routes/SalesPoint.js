const express = require('express');
const router = express.Router();
const { getAllSalesPoints } = require('../Controller/salesPointController');

router.get('/', getAllSalesPoints);

module.exports = router;
