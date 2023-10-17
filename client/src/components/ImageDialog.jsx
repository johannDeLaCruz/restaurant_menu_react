import { PropTypes } from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";


export default function ImageDialog({ open, handleClose, imageURL, name }) {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      // sx={{  }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon color="primary"/>
      </IconButton>
      <DialogContent sx={{ pt: 7, backgroundColor: theme.palette.background.default }}>
        <img src={imageURL} alt={name} width={"100%"} />
      </DialogContent>
    </Dialog>
  );
}
ImageDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  imageURL: PropTypes.string,
  name: PropTypes.string,
};
