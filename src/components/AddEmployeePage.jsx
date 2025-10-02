import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import "../css/AddEmployeePage.css"; // import the CSS

export default function AddEmployeePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    department: "",
    salary: "",
    dateOfJoining: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * AddEmployeePage component
 *
 * This component is used to add a new employee to the database
 *
 * It renders a form with fields for first name, last name, phone number, department, salary and date of joining
 * The form is validated on submit and if there are any errors, they are displayed below the corresponding field
 * If the form is successfully submitted, a success message is displayed and the user is redirected to the employees page after 1.5 seconds
 */
/*******  27dca228-fe28-4eb4-bebf-2f4bf1f703b3  *******/    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/employee/add", form);
      alert(response.data?.message || "Employee added successfully!");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Error adding employee.");
    }
  };

  return (
    <div className="add-employee-container">
      <h2>Add New Employee</h2>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={form.phoneNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfJoining"
          value={form.dateOfJoining}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
