import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

export default function ItemCard({ menuItem }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={menuItem.imageURL}
            alt={menuItem.name}
          />
          <CardContent>
          <Grid container justifyContent={"space-between"}>
              <Typography gutterBottom variant="h5" component="div">
                {menuItem.name}
              </Typography>
              <Typography variant="h6" component="span">
                ${menuItem.price}
              </Typography>
          </Grid>
            <Typography variant="body2" color="text.secondary">
              {menuItem.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
ItemCard.propTypes = {
  menuItem: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
