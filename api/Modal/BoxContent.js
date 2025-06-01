const mongoose = require('mongoose');

const boxContentSchema = new mongoose.Schema(
  {
      box_content_id: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('BoxContent', boxContentSchema);
