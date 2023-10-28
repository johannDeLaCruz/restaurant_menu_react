import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Button, Card, CardContent, TextField, Grid } from "@mui/material";

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
      await axios.put(`${apiUrl}/${updatedItems[index]._id}`, {
        name: updatedItems[index].name,
        description: updatedItems[index].description,
      });
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

  const handleAddItem = async () => {
    const newItem = {
      name: "",
      description: "",
      editable: true,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If the item is dropped outside the droppable area
    if (!destination) {
      return;
    }

    // If the item is dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reorder the items based on the drag-and-drop result
    const updatedItems = Array.from(items);
    const [draggedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, draggedItem);

    // Update the state with the reordered items
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
                          label="Nome"
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
                          label="Descrição"
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
                            variant="contained"
                            onClick={() => handleEdit(index)}
                          >
                            Editar
                          </Button>
                        )}
                        <Button
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
      <Button variant="contained" onClick={handleAddItem}>
        Add Item
      </Button>
    </DragDropContext>
  );
};

export default AdminDashboard;

AdminDashboard.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};
