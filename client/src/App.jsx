import axios from "axios";
import NavBar from "./components/NavBar";
import NavTabs from "./components/NavTabs";
import MenuList from "./components/MenuList";
import { useState, useEffect } from "react";

const App = () => {
  const dayOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = dayOfWeek[new Date().getDay()].toLowerCase();
  const [selectedDay, setSelectedDay] = useState(today);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/menu/${selectedDay}`
        );
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenu();
  }, [selectedDay]);

  const handleDayChange = (day) => {
    setSelectedDay(day); // Update selected day when a tab is clicked
  };

  return (
    <div>
      <NavBar />
      <NavTabs selectedDay={selectedDay} onSelectDay={handleDayChange} />
      <MenuList items={items} />
    </div>
  );
};

export default App;
