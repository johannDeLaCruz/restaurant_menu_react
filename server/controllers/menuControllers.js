const MenuItem = require("../models/MenuItem");

const getMenuItemsByDay = async (day) => {
  return await MenuItem.find({ category: day }).sort("order");
};

const createMenuItem = async (day, name, description, order) => {
  const menuItem = new MenuItem({
    name,
    description,
    order,
    category: day,
  });
  await menuItem.save();
  return menuItem;
};

const updateMenuItem = async (id, name, description, order) => {
  return await MenuItem.findByIdAndUpdate(
    id,
    { name, description, order },
    { new: true }
  );
};

const updateMenuItemsOrder = async (reorderedItems) => {
  for (const item of reorderedItems) {
    const { _id, order } = item;
    await MenuItem.findByIdAndUpdate(_id, { order });
  }
};

const deleteMenuItem = async (id) => {
  return await MenuItem.findByIdAndDelete(id);
};

const deleteMenuItemsByDay = async (day) => {
  return await MenuItem.deleteMany({ category: day });
};

module.exports = {
  getMenuItemsByDay,
  createMenuItem,
  updateMenuItem,
  updateMenuItemsOrder,
  deleteMenuItem,
  deleteMenuItemsByDay,
};
