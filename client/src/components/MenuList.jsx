import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import MenuItem from "../components/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MenuList = ({ selectedDay, items }) => {
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
        <List>
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </List>
        <Typography variant="h6" paragraph >Buffet R$ 11,80 a cada 100g</Typography>
        <Typography variant="h6" paragraph >Proteína R$ 15,80 a cada 100g</Typography>
        <Box>
          <Typography variant="h5">Nos siga no Instagram!</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired,
};

export default MenuList;
