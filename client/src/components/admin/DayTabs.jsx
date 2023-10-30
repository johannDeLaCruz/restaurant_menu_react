import { PropTypes } from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const DayTabs = ({ selectedDay, handleTabChange, daysOfWeek }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Tabs
        value={selectedDay}
        onChange={handleTabChange}
        scrollButtons="auto"
        variant="scrollable"
      >
        {daysOfWeek.map((day) => (
          <Tab key={day} label={day} value={day} />
        ))}
      </Tabs>
    </Box>
  );
};

DayTabs.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
};

export default DayTabs;
