import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Logo from "../components/Logo";
import Stack from "@mui/material/Stack";

export default function CustomDrawer({ handleDrawerToggle, navItems }) {
  return (
    <Box onClick={handleDrawerToggle} bgcolor={"background.default"} paddingBlock={4}>
      <Stack direction={"column"} alignItems={"center"}>
        <Logo />
        <List sx={{ pt: 4 }}>
          {navItems.map((item) => (
            <ListItem key={item}>
              <ListItemButton  sx={{ justifyContent: "center" }}>
                <Button variant="text" key={item}>
                  {item}
                </Button>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}

CustomDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
