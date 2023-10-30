import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import MenuItem from "./MenuItem";
import Typography from "@mui/material/Typography";
import Pricing from "./Pricing";
import Loader from "./Loader";

const MenuList = ({ selectedDay, items, isLoading, error }) => {
  return (
    <Container maxWidth="md" component="main">
      <Stack
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Typography variant="h3">
          -Buffet de{" "}
          {selectedDay.charAt(0).toUpperCase() +
            selectedDay.slice(1).toLowerCase()}
          -
        </Typography>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <List>
            {items.map((item, index) => (
              <MenuItem key={index} item={item} isLoading={isLoading} />
            ))}
          </List>
        )}
      </Stack>
      <Pricing />
    </Container>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default MenuList;
