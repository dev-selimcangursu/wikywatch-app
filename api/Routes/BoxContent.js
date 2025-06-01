const express = require("express");
const router = express.Router();
const boxContentController = require("../Controller/boxContentController");

router.get("/", boxContentController.getAllBoxContent);

module.exports = router;
