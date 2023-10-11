import NavBar from "./components/NavBar";
import MealList from "./components/MealList";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <MealList />
      </main>
     
    </>
  );
}

export default App;
