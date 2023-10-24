const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
const { redisClient } = require("../db.config");

router.get("/:day", async (req, res) => {
  const { day } = req.params;
  const cacheKey = `menu-${day}`;
  console.log("Fetching menu items for day:", day);
  try {
    const cachedMenuItems = await redisClient.get(cacheKey);
    if (cachedMenuItems) {
      console.log("Returning cached menu items for day:", day);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      return res.json(JSON.parse(cachedMenuItems));
    }
    const menuItems = await MenuItem.find({ category: day });
    redisClient.setex(cacheKey, 7200, JSON.stringify(menuItems));
    console.log("Fetching menu items for day:", day);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
