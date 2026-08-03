const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    description: String,
    category: {
      type: String,
      enum: ['jersey', 'hoodie', 'cap', 'mousepad', 'accessory'],
      required: true,
    },
    price: { type: Number, required: true },
    comparePrice: Number,
    images: [String],
    variants: [{ name: String, options: [{ label: String, value: String, stock: Number }] }],
    stock: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
