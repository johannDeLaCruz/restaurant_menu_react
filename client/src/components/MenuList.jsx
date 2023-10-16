import PropTypes from "prop-types";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const MenuList = ({ items }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {items.map((menuItem, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ItemCard menuItem={menuItem} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MenuList;
