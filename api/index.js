require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mobileAppsRoute = require("./Routes/MobileApp");
const salesPointRoutes = require('./Routes/SalesPoint');
const notificationRoutes = require('./Routes/Notification');
const productsRoutes = require('./Routes/Product');
const faultCategoriesRoutes = require('./Routes/FaultCategories');
const boxContentRoutes = require('./Routes/BoxContent');
const faqRoutes = require('./Routes/Faq');

const cors = require("cors");
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

app.use("/api/mobile-apps", mobileAppsRoute);
app.use('/api/sales-points', salesPointRoutes);
app.use('/api/notification', notificationRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/fault-categories', faultCategoriesRoutes);
app.use('/api/box-content', boxContentRoutes);
app.use('/api/faq', faqRoutes);


// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
