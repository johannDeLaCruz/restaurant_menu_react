import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminCard = ({
  item,
  index,
  handleInputChange,
  handleSave,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Draggable key={item._id} draggableId={item._id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ maxWidth: 700 }}
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
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <TextField
              label="Descrição do Item"
              value={item.description}
              fullWidth
              margin="normal"
              disabled={!item.editable}
              error={!!item.error}
              helperText={item.error || ""}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
            />
            {item.editable ? (
              <Button variant="contained" onClick={() => handleSave(index)}>
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
      )}
    </Draggable>
  );
};

AdminCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AdminCard;
