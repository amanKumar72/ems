import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../context/AuthContext";

const EmployeesList = () => {
  const context = useContext(AuthenticationContext);
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    const employeesIds = JSON.parse(localStorage.getItem("user")).data
      .employees;
    const emps = context.getEmployees(employeesIds);
    setEmployees(emps);
    console.log(emps);
  }, []);
  return !employees ? (
    <div className="flex justify-center items-center">
      <p>No Employee Data</p>
    </div>
  ) : (
    <div className="flex flex-col p-3 md:p-5 gap-5 md:w-full ">
      <div className="flex justify-between bg-red-500  p-3 text-xs md:p-5 md:text-lg font-semibold  rounded-lg">
        <h3 >Employee Name</h3>
        <h3 >New Task</h3>  
        <h3>Active Task</h3>
        <h3 >Completed Task</h3>
        <h3>Failed Task</h3>
      </div>
      {employees.map((employee) => {
        return (
          <div
            className="flex justify-between bg-[#1c1c1c] border-1 border-red-500  p-3 md:p-5  rounded-lg"
            key={employee.id}
          >
            <h3 className="text-amber-50" >{employee.firstName}</h3>
            <h3 className="text-blue-400">{employee.taskCounts.newTask}</h3>
            <h3 className="text-green-400">{employee.taskCounts.active}</h3>
            <h3 className="text-yellow-400">{employee.taskCounts.completed}</h3>
            <h3 className="text-orange-400">{employee.taskCounts.failed}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesList;
