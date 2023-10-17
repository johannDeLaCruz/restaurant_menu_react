import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import theme from "../themes/theme"

const CustomTab = styled(Tab)({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "0.25rem",
  backgroundColor: `${theme.palette.primary.main}`,
});

export default CustomTab;
