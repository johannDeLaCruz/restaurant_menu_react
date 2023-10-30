import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, Card, CardContent, TextField, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";

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

  const handleEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editable = true;
    setItems(updatedItems);
  };

  const handleSave = async (index) => {
    const updatedItems = [...items];
    updatedItems[index].editable = false;
    try {
      if (updatedItems[index].isNew) {
        // If it's a new item, send a POST request to save in the database
        const response = await axios.post(apiUrl, {
          name: updatedItems[index].name,
          description: updatedItems[index].description,
        });
        updatedItems[index] = response.data;
      } else {
        // If it's an existing item, send a PUT request to update in the database
        await axios.put(`${apiUrl}/${updatedItems[index]._id}`, {
          name: updatedItems[index].name,
          description: updatedItems[index].description,
        });
      }
      setItems(updatedItems);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`${apiUrl}/${items[index]._id}`);
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete(apiUrl); // Assuming this endpoint deletes all items for the respective day
      setItems([]); // Clear the items array in the state
    } catch (error) {
      console.error("Error deleting all data:", error);
    }
  };

  const handleAddItem = () => {
    const newItem = {
      name: "",
      description: "",
      editable: true,
      isNew: true, // Flag to identify new items not saved in the database
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const updatedItems = Array.from(items);
    const [draggedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Grid
            container
            spacing={2}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item._id} draggableId={item._id} index={index}>
                {(provided) => (
                  <Grid item xs={12} md={4} key={item._id}>
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardContent>
                        <TextField
                          label="Nome do Item"
                          value={item.name}
                          fullWidth
                          margin="normal"
                          disabled={!item.editable}
                          onChange={(e) => {
                            const updatedItems = [...items];
                            updatedItems[index].name = e.target.value;
                            setItems(updatedItems);
                          }}
                        />
                        <TextField
                          label="Descrição do Item"
                          value={item.description}
                          fullWidth
                          margin="normal"
                          disabled={!item.editable}
                          onChange={(e) => {
                            const updatedItems = [...items];
                            updatedItems[index].description = e.target.value;
                            setItems(updatedItems);
                          }}
                        />
                        {item.editable ? (
                          <Button
                            variant="contained"
                            onClick={() => handleSave(index)}
                          >
                            Salvar
                          </Button>
                        ) : (
                          <Button
                            startIcon={<EditSharpIcon />}
                            variant="contained"
                            onClick={() => handleEdit(index)}
                          >
                            Editar
                          </Button>
                        )}
                        <Button
                          startIcon={<DeleteIcon />}
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(index)}
                        >
                          Deletar
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddItem}
      >
        Adicionar Novo Item
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        variant="contained"
        color="error"
        onClick={handleDeleteAll}
      >
        Deletar Todos!
      </Button>
    </DragDropContext>
  );
};

export default AdminDashboard;

AdminDashboard.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};
