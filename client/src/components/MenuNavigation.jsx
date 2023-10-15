import PropTypes from 'prop-types';
import { Tabs, Tab } from '@mui/material';

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const DayTabs = ({ selectedDay, onSelectDay }) => {
  const handleTabChange = (event, newValue) => {
    onSelectDay(newValue); // Pass the selected day to the parent component
  };

  return (
    <Tabs value={selectedDay} onChange={handleTabChange}>
      {days.map((day, index) => (
        <Tab key={index} label={day} value={day} />
      ))}
    </Tabs>
  );
};

DayTabs.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onSelectDay: PropTypes.func.isRequired,
};

export default DayTabs;
