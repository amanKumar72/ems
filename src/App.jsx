import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import CreateTask from "./pages/CreateTask";
import CreateMember from "./pages/CreateMember";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home?" element={<AdminDashboard />} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="admin">
          <Route index element={<AdminDashboard />}></Route>
          <Route path="create-task" element={<CreateTask />}></Route>
          <Route path="create-member" element={<CreateMember />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
