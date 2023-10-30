import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
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
        const response = await axios.post(apiUrl, {
          name: updatedItems[index].name,
          description: updatedItems[index].description,
        });
        updatedItems[index] = response.data;
      } else {
        await axios.put(`${apiUrl}/${updatedItems[index]._id}`, {
          name: updatedItems[index].name,
          description: updatedItems[index].description,
        });
      }
      setItems(updatedItems);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        updatedItems[index].error = error.response.data.error;
        setItems(updatedItems);
      } else {
        console.error("Error saving data:", error);
      }
    }
  };

  const handleDelete = async (index) => {
    const updatedItems = [...items];
    const itemToDelete = updatedItems[index];
    if (itemToDelete.isNew) {
      updatedItems.splice(index, 1); // Remove the new item directly from the state
      setItems(updatedItems);
    } else {
      try {
        await axios.delete(`${apiUrl}/${itemToDelete._id}`);
        updatedItems.splice(index, 1); // Remove the item from the state after deleting from the database
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
    <div>
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
                            error={!!item.error}
                            helperText={item.error || ""}
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
                            error={!!item.error}
                            helperText={item.error || ""}
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
      </DragDropContext>
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
    </div>
  );
};

export default AdminDashboard;

AdminDashboard.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};
