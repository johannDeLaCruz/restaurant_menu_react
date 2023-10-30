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
    const menuItems = await MenuItem.find({ category: day }).sort("order");
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
  const { name, description, order } = req.body;
  try {
    const menuItem = new MenuItem({
      name,
      description,
      order,
      category: day,
    });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    // Handle validation errors
    if (error.errors) {
      const errorMessage = Object.values(error.errors)
        .map((e) => e.message)
        .join(", ");
      res.status(400).json({ error: errorMessage });
    } else {
      // Handle other types of errors
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

router.put("/:day/:id", async (req, res) => {
  const { day, id } = req.params;
  const { name, description, order } = req.body;

  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      { name, description, order }, // Update 'name', 'description', and 'order' properties
      { new: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    // Handle updating order if provided in the request
    if (order !== undefined && order !== null) {
      // Assuming 'order' is an integer representing the new order of the item
      // Update the order of the item in the database
      await MenuItem.updateMany(
        { day, order: { $gte: order } },
        { $inc: { order: 1 } }
      );
    }
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:day", async (req, res) => {
  const { day } = req.params;
  const reorderedItems = req.body;
  try {
    // Iterate through the reordered items and update their order properties
    for (const item of reorderedItems) {
      const { _id, order } = item;
      await MenuItem.findByIdAndUpdate(_id, { order });
    }
    res.json({ message: "Order updated successfully" });
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

router.delete("/:day", async (req, res) => {
  const { day } = req.params;
  try {
    const menuItems = await MenuItem.deleteMany({ category: day });
    res.json({ message: "Menu items deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
