const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

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
