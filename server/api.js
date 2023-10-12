const express = require("express");
const router = express.Router();
const MenuItem = require("./models/MenuItem");

router.use("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.use("/:category", async (req, res) => {
  const currentCategory = req.params;
  try {
    const menuItems = await MenuItem.find({ category: currentCategory });
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
