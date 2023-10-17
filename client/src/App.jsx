import axios from "axios";
import NavBar from "./components/NavBar";
import NavTabs from "./components/NavTabs";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";


const App = () => {
  const dayOfWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
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
    <>
      <NavBar />
      <NavTabs
        selectedDay={selectedDay}
        onSelectDay={handleDayChange}
        days={dayOfWeek}
      />
      <MenuList items={items} />
      <Footer />
    </>
  );
};

export default App;
