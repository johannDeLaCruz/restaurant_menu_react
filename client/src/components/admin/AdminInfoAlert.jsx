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
        <Alert
          severity="info"
          onClose={handleClose}
          variant="filled"
          sx={{ mt: 2 }}
        >
          <AlertTitle>Instruções de Uso:</AlertTitle>
          <List>
            <ListItemText secondary="Para mudar a ordem dos itens no menu — arraste os cards!"></ListItemText>
            <ListItemText secondary="Pressione respectivos botões para adicionar, editar ou excluir os cards"></ListItemText>
          </List>
        </Alert>
      )}
    </>
  );
};

export default AdminInfoAlert;
