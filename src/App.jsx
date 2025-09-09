import Home from "./components/pages/Home";
import Header from "./components/Header";
import Villains from "./components/pages/Villains";
import Movies from "./components/pages/Movies";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <Home />}
      {currentPage === "Movies" && <Movies />}
      {currentPage === "Villains" && <Villains />}
    </div>
  );
}

export default App;
