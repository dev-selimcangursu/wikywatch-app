const mongoose = require("mongoose");

const mobileAppSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    androidScheme: {
      type: String,
      required: false,
    },
    iosScheme: {
      type: String,
      required: false,
    },
    androidStore: {
      type: String,
      required: false,
    },
    iosStore: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MobileApp", mobileAppSchema);
