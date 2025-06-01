const BoxContent = require("../Modal/BoxContent");

exports.getAllBoxContent = async (req, res) => {
  try {
    const contents = await BoxContent.find({ is_active: true });

    return res.status(200).json({
      success: true,
      count: contents.length,
      data: contents,
    });
  } catch (error) {
    console.error("Kutu içeriği alınırken hata:", error.message);

    return res.status(500).json({
      success: false,
      message: "Sunucu hatası: Kutu içeriği alınamadı.",
      error: error.message,
    });
  }
};
