import { PropTypes } from "prop-types";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

export default function MenuItem({ item, key }) {
  return (
    <ListItem key={key}>
      <ListItemText>
        <Typography variant="h2">{item.name}</Typography>
        <Typography variant="body1">{item.description}</Typography>
      </ListItemText>
      <Divider />
    </ListItem>
  );
}

MenuItem.propTypes = {
  item: PropTypes.object,
  key: PropTypes.number,
};
