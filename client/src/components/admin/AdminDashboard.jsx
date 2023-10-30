import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";
import AdminCard from "./AdminCard";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminDashboard = ({ apiUrl }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    handleInputChange(index, "editable", true);
  };

  const handleSave = async (index) => {
    const currentItem = items[index];
    const requestData = {
      name: currentItem.name,
      description: currentItem.description,
      order: index,
    };
    try {
      const response = currentItem.isNew
        ? await axios.post(apiUrl, requestData)
        : await axios.put(`${apiUrl}/${currentItem._id}`, requestData);
      const updatedItems = [...items];
      updatedItems[index] = response.data;
      handleInputChange(index, "editable", false);
      setItems(updatedItems);
    } catch (error) {
      handleInputChange(
        index,
        "error",
        error.response?.data?.error || "Error saving data"
      );
      console.error("Error saving data:", error);
    }
  };

  const handleDelete = async (index) => {
    const itemToDelete = items[index];

    if (itemToDelete.isNew) {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    } else {
      try {
        await axios.delete(`${apiUrl}/${itemToDelete._id}`);
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete(apiUrl);
      setItems([]);
    } catch (error) {
      console.error("Error deleting all data:", error);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      name: "",
      description: "",
      editable: true,
      isNew: true,
      order: items.length,
    };
    setItems([...items, newItem]);
  };

  const onDragEnd = async (result) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) {
      return;
    }
    const updatedItems = Array.from(items);
    const [draggedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, draggedItem);
    setItems(updatedItems);
    try {
      const reorderedItems = updatedItems.map((item, index) => ({
        ...item,
        order: index,
      }));
      await axios.put(apiUrl, { reorderedItems });
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Stack
              spacing={2}
              alignItems={"center"}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <AdminCard
                  key={item._id}
                  item={item}
                  index={index}
                  handleInputChange={handleInputChange}
                  handleSave={handleSave}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
      <Stack direction={"column"} alignItems={"center"} py={6} spacing={2}>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleAddItem}
          sx={{ width: 220 }}
        >
          Adicionar Novo Item
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant="contained"
          color="error"
          onClick={handleDeleteAll}
          sx={{ width: 220 }}
        >
          Deletar Todos
        </Button>
      </Stack>
    </>
  );
};

AdminDashboard.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

export default AdminDashboard;
