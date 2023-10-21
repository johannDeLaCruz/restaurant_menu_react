import { PropTypes } from "prop-types";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

const MenuItem = ({ item }) => {
  const theme = useTheme();

  return (
    <>
      <ListItem sx={{ py: 3 }}>
        <ListItemText
          primary={
            <Typography variant="h6" align="center" gutterBottom>
              {item.name}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              align="center"
              gutterBottom
              style={{ color: theme.palette.primary.light }}
            >
              {item.description}
            </Typography>
          }
        />
      </ListItem>
      <Divider
        sx={{
          borderColor: "primary.main",
          opacity: "30%",
          width: "30%",
          margin: "0 auto",
        }}
        variant="middle"
      />
    </>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default MenuItem;
