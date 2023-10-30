import { useState } from "react";
import Container from "@mui/material/Container";
import DayTabs from "./DayTabs";
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
    <>
      <Container>
        <DayTabs
          handleTabChange={handleTabChange}
          selectedDay={selectedDay}
          daysOfWeek={daysOfWeek}
        />
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
      </Container>
    </>
  );
};

export default NavTabs;
