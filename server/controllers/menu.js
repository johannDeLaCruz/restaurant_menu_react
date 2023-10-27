const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
// const { redisClient } = require("../db.config");

router.get("/:day", async (req, res, next) => {
  const { day } = req.params;
  // const cacheKey = `menu-${day}`;
  console.log("Fetching menu items for day:", day);
  try {
    // const cachedMenuItems = await redisClient.get(cacheKey);
    // if (cachedMenuItems) {
    //   console.log("Returning cached menu items for day:", day);
    //   res.setHeader("Cache-Control", "public, max-age=3000");
    //   return res.json(JSON.parse(cachedMenuItems));
    // }
    const menuItems = await MenuItem.find({ category: day });
    // redisClient.setex(cacheKey, 7200, JSON.stringify(menuItems));
    console.log("Fetching menu items for day:", day);
    // res.setHeader("Cache-Control", "public, max-age=3000");
    res.json(menuItems);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/:day", async (req, res) => {
  const { day } = req.params;
  const { name, description } = req.body;
  try {
    const menuItem = new MenuItem({
      name,
      description,
      category: day,
    });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:day/:id", async (req, res) => {
  const { day, id } = req.params;
  const { name, description } = req.body;
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:day/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const menuItem = await MenuItem.findByIdAndDelete(id);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
