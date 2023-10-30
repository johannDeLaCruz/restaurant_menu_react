import { PropTypes } from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const DayTabs = ({ selectedDay, handleTabChange, daysOfWeek }) => {
  return (
    <Tabs
      value={selectedDay}
      onChange={handleTabChange}
      scrollButtons="auto"
      variant="scrollable"
      sx={'.MuiTabs-flexContainer: {justifyContent: "center"}'}
    >
      {daysOfWeek.map((day) => (
        <Tab key={day} label={day} value={day} />
      ))}
    </Tabs>
  );
};

DayTabs.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  daysOfWeek: PropTypes.array.isRequired,
};

export default DayTabs;
