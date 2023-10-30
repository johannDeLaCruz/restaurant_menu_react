import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import CustomDrawer from "./CustomDrawer";
import Logo from "./Logo";

const navItems = ["Início", "Menu"];

function NavBar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <nav>
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xxs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          <CustomDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </nav>
      <AppBar component="nav" position="static" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box paddingBlock={1}>
           <Logo />
          </Box>
          <Box sx={{ display: { xxs: "none", sm: "block" } }}>
            <Stack direction="row" spacing={2}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  size="large"
                  variant="outlined"
                  color="secondary"
                  // sx={{
                  //   "&.Mui-selected, &:focus": {
                  //     color: theme.palette.primary.main,
                  //     backgroundColor: theme.palette.secondary.main,
                  //   },
                  // }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Box>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
