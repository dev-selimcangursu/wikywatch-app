const SalesPoint = require('../Modal/SalesPoint');

// Sadece aktif satış noktalarını getir
const getAllSalesPoints = async (req, res) => {
  try {
    const salesPoints = await SalesPoint.find({ is_active: true });
    res.json(salesPoints);
  } catch (error) {
    console.error('Satış noktaları getirilemedi:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};

module.exports = {
  getAllSalesPoints,
};
