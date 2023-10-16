import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const NavTabs = ({ selectedDay, onSelectDay }) => {
  const handleTabChange = (event, newValue) => {
    onSelectDay(newValue); // Pass the selected day to the parent component
  };

  return (
    <Box sx={{ justifyContent: "center", display: "flex", paddingBottom: 2}}>
      <Tabs
        value={selectedDay}
        onChange={handleTabChange}
        scrollButtons={true}
        variant="scrollable"
      >
        {days.map((day, index) => (
          <Tab key={index} label={day} value={day} />
        ))}
      </Tabs>
    </Box>
  );
};

NavTabs.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onSelectDay: PropTypes.func.isRequired,
};

export default NavTabs;