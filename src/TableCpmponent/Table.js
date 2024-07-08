import React, { useState, useEffect } from "react";
import EmployeeData from "../EmployeeData.json";
import "./Table.css";

const Table = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    setEmployees(EmployeeData.employee);
  }, []);
  const addRow = () => {
    const newRow = {
      employee_id: employees.length + 1,
      employee_name: "-",
      employee_salary: "-",
      employee_age: "-",
      color: addColor(),
    };
    setEmployees([...employees, newRow]);
  };
  const addColor = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
  };
  return (
    <div>
      <div className="container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Employee id</th>
              <th>Employee Name</th>
              <th>Employee salary</th>
              <th>Employee age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((empData) => (
              <tr
                key={empData.employee_id}
                style={{ backgroundColor: empData.color }}
              >
                <td>{empData.employee_id}</td>
                <td>{empData.employee_name}</td>
                <td>{empData.employee_salary}</td>
                <td>{empData.employee_age}</td>
                <td>
                  <button className="Dlt_Btn">DLT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addRow} className="add-btn">
          +
        </button>
      </div>
    </div>
  );
};

export default Table;
