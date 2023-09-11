import "./App.css";
import Sidebar from "./components/Sidebar/Index";
import Header from "./components/Header/Index";
import Dashboard from "./components/Dashboard/Index";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar/Index";
import Profile from "./components/Profile/Index";
import FormElement from "./components/Form/FormElement/Index";
import FormLayout from "./components/Form/FormLayout/Index";
import Table from "./components/Table/Index";
import Setting from "./components/Setting/Index";
import ChartOne from "./components/charts/ChartOne";
import Alert from "./components/Alert/Index";
import Button from "./components/Button/Index";
import SignIn from "./components/SignIn/Index";
import SignUp from "./components/SignUp/Index";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/form-elements" element={<FormElement />} />
          <Route path="/form-layout" element={<FormLayout />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/chart" element={<ChartOne />} />
          <Route path="/alerts" element={<Alert />} />
          <Route path="/buttons" element={<Button />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
