import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material/styles";

export default function CustomDrawer({ handleDrawerToggle, navItems }) {
  const theme = useTheme();
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <List sx={{ py: 6 }}>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <Button
                key={item}
                sx={{
                  color: theme.palette.primary.main,
                  backgroundColor: "transparent",
                  border: `1px solid ${theme.palette.primary.main}`,
                  "&:hover, &.Mui-selected, &:focus": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                  },
                  fontWeight: "bold",
                }}
              >
                {item}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

CustomDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
