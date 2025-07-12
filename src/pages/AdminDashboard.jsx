import Header from "../components/comps/Header";
import { Link } from "react-router-dom";
import EmployeesList from "../components/TaskList/EmployeesList";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";
const AdminDashboard = () => {
  const context = useContext(AuthenticationContext);

  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    const employeesIds = context.getUser().data.employees;

    const emps = context.getEmployees(employeesIds);
    setEmployees(emps, employeesIds);
    console.log(emps);
  }, []);
  return (
    <div className="h-screen w-full">
      <Header></Header>
      <div className="create-buttons flex gap-10 justify-center p-2">
        <Link
          to="create-task"
          className=" bg-blue-400 px-2 py-1 text-lg md:text-2xl md:px-5 md:py-2 rounded-2xl z-100 text-center "
        >
          Create Task
        </Link>
        <Link
          to="create-member"
          className=" bg-green-400 px-2 py-1 text-lg  md:text-2xl md:px-5 md:py-2 rounded-2xl z-100  "
        >
          Create Member
        </Link>
      </div>
      <EmployeesList employees={employees} />
    </div>
  );
};

export default AdminDashboard;
