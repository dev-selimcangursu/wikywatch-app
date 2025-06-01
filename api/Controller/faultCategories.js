const FaultCategories = require('../Modal/FaultCategories');

exports.getAllFaultCategories = async (req, res) => {
  try {
    const faultCategories = await FaultCategories.find({ is_active: true });
    res.status(200).json({
      success: true,
      count: faultCategories.length,
      data: faultCategories,
    });
  } catch (error) {
    console.error('Arıza Kategorilerini çekerken hata:', error);
    res.status(500).json({
      success: false,
      message: 'Sunucu hatası. Arıza Kategorileri alınamadı.',
    });
  }
};
