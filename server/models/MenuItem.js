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
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 2 && value.length <= 30;
      },
      message: "Name must be between 2 and 30 characters long.",
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 4 && value.length <= 100;
      },
      message: "Description must be between 4 and 100 characters long.",
    },
  },

  category: {
    type: String,
    required: true,
    set: (value) => value.toLowerCase(),
    validate: {
      validator: function (value) {
        return dayOfWeek.includes(value.toLowerCase());
      },
    },
  },

  // index: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // }
});
// menuItemSchema.index({ category: 1, index: 1 }, { unique: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;

