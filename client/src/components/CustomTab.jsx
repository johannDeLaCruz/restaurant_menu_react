import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

const CustomTab = styled(Tab)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "0.25rem",
  color: theme.palette.primary.main,
  "&:hover, &.Mui-selected, &:focus": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export default CustomTab;
