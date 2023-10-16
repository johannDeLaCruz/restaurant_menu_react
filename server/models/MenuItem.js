const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

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
        return value.length >= 4 && value.length <= 140;
      },
      message: "Description must be between 4 and 140 characters long.",
    },
  },

  category: {
    type: String,
    required: true,
    set: (value) => value.toLowerCase(),
    validate: {
      validator: function (value) {
        return daysOfWeek.includes(value.toLowerCase());
      },
    },
  },
  imageURL: {
    type: String,
    required: true,
  },
  icons: [
    {
      type: String,
      enum: [
        "meat",
        "milk",
        "wheat",
        "vegan",
        "gluten-free",
        "nut-free",
        "seafood",
        "spicy",
      ],
    },
  ],
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;

// const Meal1 = new MenuItem({
//   name: "ChickeinIN",
//   description: "OHNOOHNOHONONONONONONONOARGHHHH",
//   category: "Wednesday",
//   imageURL:
//     "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by",
//   icons: ["spicy"],
// });

