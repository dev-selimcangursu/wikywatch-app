const Notification = require("../Modal/Notification");

// Tüm bildirimleri getir
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ read: false }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Bildirimi okundu olarak işaretle
exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ message: "Bildirim bulunamadı." });
    }

    notification.read = true;
    await notification.save();

    res.json({ message: "Bildirim okundu olarak işaretlendi.", notification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};