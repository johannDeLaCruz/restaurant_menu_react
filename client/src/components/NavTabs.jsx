import PropTypes from "prop-types";
import CustomTab from "../components/CustomTab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

const NavTabs = ({ selectedDay, onSelectDay, days }) => {
  const handleTabChange = (event, newValue) => {
    onSelectDay(newValue); // Pass the selected day to the parent component
  };

  return (
    <Box
      sx={{
        pt: 4,
        pb: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={selectedDay}
        onChange={handleTabChange}
        scrollButtons={true}
        variant="scrollable"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {days.map((day, index) => (
          <CustomTab key={index} label={day} value={day} sx={{ mx: 1 }} />
        ))}
      </Tabs>
    </Box>
  );
};

NavTabs.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onSelectDay: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired,
};

export default NavTabs;
