import "./App.css";
import Sidebar from "./components/Sidebar/Index";
import Header from "./components/Header/Index";
import Dashboard from "./components/Dashboard/Index";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar/Index";

function App() {
  const { darkMode } = useContext(MainContext);

  return (
    <div
      class={`${
        darkMode && "dark text-bodydark bg-boxdark-2"
      } flex h-screen overflow-hidden`}
    >
      <Sidebar />

      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
