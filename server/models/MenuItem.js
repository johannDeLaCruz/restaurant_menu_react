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
      message: "O nome tem que ter entre 2 e 30 caracteres",
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 4 && value.length <= 100;
      },
      message: "A descrição tem que ter entre 4 e 100 caracteres",
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

  order: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return Number.isInteger(value) && value >= 0;
      },
      message: "Order must be a non-negative integer",
    },
  },
});
// menuItemSchema.index({ category: 1, index: 1 }, { unique: true });

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
