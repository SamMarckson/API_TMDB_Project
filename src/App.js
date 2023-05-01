import "./App.css";
import { Outlet } from "react-router-dom";

// imports template
// import Navbar from "./templates/Navbar"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default App;
