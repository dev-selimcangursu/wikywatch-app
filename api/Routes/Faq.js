const express = require('express');
const router = express.Router();
const faqController = require('../Controller/FaqController');

// 🔹 Aktif olan tüm SSS verilerini getir
router.get('/', faqController.getActiveFaqs);


module.exports = router;
