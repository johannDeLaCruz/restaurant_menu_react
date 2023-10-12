const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 2 && value.length <= 20;
      },
      message: "Name must be between 2 and 20 characters long.",
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 4 && value.length <= 40;
      },
      message: "Description must be between 4 and 40 characters long.",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  icons: [{
    type: String,
    enum: ['meat', 'milk', 'wheat', 'vegan', 'gluten-free', 'nut-free', 'seafood', 'spicy'],
  }],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;