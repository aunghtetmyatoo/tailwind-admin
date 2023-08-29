import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Index';
import Header from './components/Header/Index';
import Dashboard from './components/Dashboard/Index';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
