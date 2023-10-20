import { PropTypes } from "prop-types";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const MenuItem = ({ item, key }) => {
  return (
    <>
      <ListItem key={key} sx={{ py: 6 }}>
        <ListItemText
          primary={
            <Typography variant="h2" align="center">
              {item.name}
            </Typography>
          }
          secondary={
            <Typography variant="body1" align="center">
              {item.description}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  key: PropTypes.number,
};

export default MenuItem;
