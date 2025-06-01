const express = require('express');
const router = express.Router();
const faultCategoriesController = require('../Controller/faultCategories');

router.get('/', faultCategoriesController.getAllFaultCategories);

module.exports = router;
