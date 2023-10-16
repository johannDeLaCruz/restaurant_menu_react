import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function ItemCard({ menuItem }) {
  return (
    <Card sx={{ maxWidth: 568, p: 2 }}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120, objectFit: "cover" }}
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
