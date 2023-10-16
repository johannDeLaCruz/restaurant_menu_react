import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";
import { useState } from "react";
import ImageDialog from "../components/ImageDialog";

export default function ItemCard({ menuItem }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 568, p: 2 }}>
      <CardActionArea
        onClick={handleClickOpen}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 120, width: 120, objectFit: "cover" }}
          image={menuItem.imageURL}
          alt={menuItem.name}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 2,
          }}
        >
          <Typography gutterBottom variant="h5" component="h3">
            {menuItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" height="4em">
            {menuItem.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ImageDialog
        // selectedValue={selectedValue}
        open={open}
        handleClose={handleClose}
        imageURL={menuItem.imageURL}
        name={menuItem.name}
      />
    </Card>
  );
}

ItemCard.propTypes = {
  menuItem: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
