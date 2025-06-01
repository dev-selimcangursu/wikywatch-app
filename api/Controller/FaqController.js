const Faq = require('../Modal/Faq');

// Tüm aktif (isActive: true) SSS verilerini getir
const getActiveFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({ isActive: true });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'SSS verileri alınamadı.', error: error.message });
  }
};

module.exports = {
  getActiveFaqs
};
