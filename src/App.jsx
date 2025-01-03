import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const [page, setPage] = useState("Home"); // Home, Contact, Portfolio
  console.log("Page: " + page);
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page == "Home" && <Home />}
      {page == "Contact" && <Contact />}
      {page == "Portfolio" && <Portfolio />}
    </>
  );
}

export default App;
