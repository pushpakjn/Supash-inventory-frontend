// src/pages/EmployeePage.jsx
import { useState, useEffect } from "react";

export default function EmployeePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("http://localhost:8080/employee/all")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700">
        Employee Records
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {emp.firstName} {emp.lastName}
              </h2>
              <p className="text-sm text-gray-600">📞 {emp.phoneNo}</p>
              <p className="mt-2 text-sm">
                <span className="font-medium">Department:</span>{" "}
                {emp.department || "—"}
              </p>
              <p className="text-sm">
                <span className="font-medium">Salary:</span> ₹{emp.salary}
              </p>
              <p className="text-sm">
                <span className="font-medium">Joined:</span>{" "}
                {emp.dateOfJoining || "—"}
              </p>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              <p>Created: {emp.createdDate}</p>
              <p>Updated: {emp.lastModifiedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
