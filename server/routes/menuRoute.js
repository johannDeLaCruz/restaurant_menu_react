const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");

router.get("/:day", async (req, res) => {
  const { day } = req.params;
  try {
    const menuItems = await menuController.getMenuItemsByDay(day);
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/:day", async (req, res) => {
  const { day } = req.params;
  const { name, description, order } = req.body;
  try {
    const menuItem = await menuController.createMenuItem(
      day,
      name,
      description,
      order
    );
    res.status(201).json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:day/:id", async (req, res) => {
  const { day, id } = req.params;
  const { name, description, order } = req.body;
  try {
    const menuItem = await menuController.updateMenuItem(
      id,
      name,
      description,
      order
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

router.put("/:day", async (req, res) => {
  const { day } = req.params;
  const { reorderedItems } = req.body;
  if (!Array.isArray(reorderedItems)) {
    return res.status(400).json({ error: "Invalid input for reordered items" });
  }
  try {
    await menuController.updateMenuItemsOrder(reorderedItems);
    res.json({ message: "Order updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:day/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const menuItem = await menuController.deleteMenuItem(id);
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
    await menuController.deleteMenuItemsByDay(day);
    res.json({ message: "Menu items deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
