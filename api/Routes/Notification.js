const express = require("express");
const router = express.Router();
const notificationController = require("../Controller/notificationController");

// Tüm bildirimleri getir
router.get("/", notificationController.getAllNotifications);
router.patch("/:id/read", notificationController.markAsRead);

module.exports = router;