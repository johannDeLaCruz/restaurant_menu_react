import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import PropTypes from "prop-types";
// import Typography from "@mui/material/Typography";
import ItemList from "./ItemList";

// function ItemList(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// ItemList.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons={true}
          variant="scrollable"
        >
          <Tab label="Domingo" {...a11yProps(0)} />
          <Tab label="Segunda-feira" {...a11yProps(1)} />
          <Tab label="Terça-feira" {...a11yProps(2)} />
          <Tab label="Quarta-feira" {...a11yProps(3)} />
          <Tab label="Quinta-feira" {...a11yProps(4)} />
          <Tab label="Sexta-feira" {...a11yProps(5)} />
          <Tab label="Sábado" {...a11yProps(6)} />
        </Tabs>
      </Box>
    </Box>
  );
}
