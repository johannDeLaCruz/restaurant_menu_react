const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dayOfWeek = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Name must have at least 2 characters"],
    maxlength: [30, "Name cannot exceed 30 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [4, "Description must have at least 4 characters"],
    maxlength: [100, "Description cannot exceed 100 characters"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    lowercase: true,
    validate: {
      validator: function (value) {
        return dayOfWeek.includes(value.toLowerCase());
      },
      message: "Invalid category value",
    },
  },
  order: {
    type: Number,
    required: [true, "Order is required"],
    validate: {
      validator: Number.isInteger,
      message: "Order must be an integer",
    },
    min: [0, "Order must be a non-negative integer"],
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
