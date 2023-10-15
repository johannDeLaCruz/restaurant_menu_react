import axios from "axios";
import NavBar from "./components/NavBar";
import DayTabs from "./components/MenuNavigation";
import MenuList from "./components/ItemList";
import { useState, useEffect } from "react";

const App = () => {
  const [selectedDay, setSelectedDay] = useState('sunday'); // Default selected day
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/menu/${selectedDay}`);
        setMeals(response.data);
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
      <DayTabs selectedDay={selectedDay} onSelectDay={handleDayChange} />
      <MenuList meals={meals} />
    </div>
  );
};

export default App;
