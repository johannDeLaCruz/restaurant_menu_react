import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

const AdminInfoAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Alert severity="info" onClose={handleClose} variant="filled">
          <AlertTitle>Instruções de Uso:</AlertTitle>
          <List>
            <ListItemText secondary="Para mudar a ordem dos itens — arraste os cards!"></ListItemText>
            <ListItemText secondary='Pressione "editar" para editar o card.'></ListItemText>
            <ListItemText secondary='Pressione "excluir" para excluir o card.'></ListItemText>
          </List>
        </Alert>
      )}
    </>
  );
};

export default AdminInfoAlert;
