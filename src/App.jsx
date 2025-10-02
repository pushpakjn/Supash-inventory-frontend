import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckHealth from "./CheckHealth";  
import EmployeePage from './components/EmployeePage';
import AddEmployeePage from './components/AddEmployeePage';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Inventory Management</h1>
//       <CheckHealth />
//     </>
//   )
// }

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">Employee Portal</h1>
          <div className="space-x-4">
            <Link to="/employees" className="hover:underline">
              Employees
            </Link>
            <Link to="/add- employee" className="hover:underline">
              Add Employee
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/CheckHealth" element={<CheckHealth />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/add-employee" element={<AddEmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
