import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

const CustomTab = styled(Tab)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  "&:hover, &.Mui-selected, &:focus": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  textTransform: "capitalize",
  minWidth: "7.5rem",
  minHeight: "2.25rem",
  height: "2.25rem",
  fontWeight: "bold",
  // '& .MuiButtonBase-root': {
  //   padding: '5rem', 
  // },
}));

export default CustomTab;
