import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import AdminDashboard from "./AdminDashboard";

const daysOfWeek = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

const dayToday = daysOfWeek[new Date().getDay()].toLowerCase();
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

const NavTabs = () => {
  const [selectedDay, setSelectedDay] = useState(dayToday);

  const handleTabChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedDay}
        onChange={handleTabChange}
        centered
        scrollButtons="auto"
        variant="scrollable"
      >
        {daysOfWeek.map((day) => (
          <Tab key={day} label={day} value={day} />
        ))}
      </Tabs>
      {daysOfWeek.map((day) => (
        <div
          key={day}
          style={{ display: selectedDay === day ? "block" : "none" }}
        >
          {selectedDay === day && (
            <AdminDashboard apiUrl={`${SERVER_PORT}/menu/${day}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
