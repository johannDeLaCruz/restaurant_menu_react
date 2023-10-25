import PropTypes from "prop-types";
import CustomTab from "../components/CustomTab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { useEffect, useRef } from "react";

const NavTabs = ({ selectedDay, onSelectDay, days }) => {
  const tabsRef = useRef(null);
  useEffect(() => {
    // Center the active tab in the viewport
    if (tabsRef.current) {
      const activeTab = Array.from(tabsRef.current.children).find(
        (tab) => tab.textContent.toLowerCase() === selectedDay.toLowerCase()
      );
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  }, [selectedDay]);

  const handleTabChange = (event, newValue) => {
    onSelectDay(days[newValue]); // Pass the selected day to the parent component
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
        ref={tabsRef}
        value={days.findIndex((day) => day.toLowerCase() === selectedDay.toLowerCase())}
        onChange={handleTabChange}
        scrollButtons={true}
        variant="scrollable"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {days.map((day, index) => (
          <CustomTab key={index} label={day} value={index} sx={{ mx: 1 }} />
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
