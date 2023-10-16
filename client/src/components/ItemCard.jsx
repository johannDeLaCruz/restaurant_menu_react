import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function ItemCard({ menuItem }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={menuItem.imageURL}
          alt={menuItem.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {menuItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {menuItem.description}
          </Typography>
        </CardContent>
      </CardActionArea>
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
