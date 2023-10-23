import Loader from "./components/Loader";
import axios from "axios";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import NavTabs from "./components/NavTabs";
import MenuList from "./components/MenuList";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import { useState, useEffect } from "react";

const SERVER_PORT = import.meta.env.VITE_SERVER_PORT

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(
          `${SERVER_PORT}/menu/${selectedDay}`
        );
        setItems(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError("Error loading menu. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, [selectedDay]);

  return (
    <>
      {!isLoading ? (
        <>
          <header>
            <NavBar />
            <NavTabs
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              days={dayOfWeek}
            />
          </header>
          <MenuList
            items={items}
            selectedDay={selectedDay}
            isLoading={isLoading}
            error={error}
          />
          <CallToAction />
          <Footer />
        </>
      ) : isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  selectedDay: PropTypes.string.isRequired,
};

export default App;
