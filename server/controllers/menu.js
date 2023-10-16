const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// router.get("/", async (req, res) => {
//   try {
//     const dayOfWeek = [
//       "sunday",
//       "monday",
//       "tuesday",
//       "wednesday",
//       "thursday",
//       "friday",
//       "saturday",
//     ];
//     const today = dayOfWeek[new Date().getDay()].toLowerCase();
//     console.log("Redirecting to:", `${req.baseUrl}/${today}`);
//     res.redirect(`${req.baseUrl}/${today}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

router.get("/:day", async (req, res) => {
  const { day } = req.params;
  console.log("Fetching menu items for day:", day);
  try {
    const menuItems = await MenuItem.find({ category: day });
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
