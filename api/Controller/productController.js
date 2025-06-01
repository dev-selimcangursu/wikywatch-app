const Product = require('../Modal/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('Ürünleri çekerken hata:', error);
    res.status(500).json({
      success: false,
      message: 'Sunucu hatası. Ürünler alınamadı.',
    });
  }
};
