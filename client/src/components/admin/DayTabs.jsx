import { PropTypes } from "prop-types";
import { Tabs, Tab } from "@mui/material";

const DayTabs = ({ days, activeDay, onChange }) => {
  return (
    <Tabs value={activeDay} onChange={onChange}>
      {days.map((day, index) => (
        <Tab key={index} label={day} value={index} />
      ))}
    </Tabs>
  );
};

DayTabs.propTypes = {
  days: PropTypes.array.isRequired,
  activeDay: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DayTabs;
