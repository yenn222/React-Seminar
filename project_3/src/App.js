import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
      <div className="App">
          <Outlet />
          <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/new"}>New</Link>
              <Link to={"/diary"}>Diary</Link>
              <Link to={"/edit"}>Edit</Link>
          </div>
      </div>
  );
}

export default App;
