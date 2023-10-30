import { useState } from "react";
import Container from "@mui/material/Container";
import DayTabs from "./DayTabs";
import AdminDashboard from "./AdminDashboard";
import AdminInfoAlert from "./AdminInfoAlert";

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

const AdminRoot = () => {
  const [selectedDay, setSelectedDay] = useState(dayToday);

  const handleTabChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  return (
    <>
      <Container>
        <AdminInfoAlert />
        <DayTabs
          handleTabChange={handleTabChange}
          selectedDay={selectedDay}
          daysOfWeek={daysOfWeek}
        />
        {daysOfWeek.map((day) => (
          selectedDay === day && (
            <AdminDashboard key={day} apiUrl={`${SERVER_PORT}/menu/${day}`} />
          )
        ))}
      </Container>
    </>
  );
};

export default AdminRoot;
