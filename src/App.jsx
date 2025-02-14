import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTask from "./pages/CreateTask";
import CreateMember from "./pages/CreateMember";
import SignUp from "./pages/SignUp";
import { useContext, useEffect } from "react";
import { AuthenticationContext } from "./context/AuthContext";
import Home from "./pages/Home";

const App = () => {
  const context = useContext(AuthenticationContext);
  const nav = useNavigate();
  useEffect(() => {
    const user=JSON.parse(context.getUser())
    if (user) {
      console.log(user)
      user.role == "admin" ? nav("admin") : nav("employee");
    } else {
      nav("/");
    }
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/home?" element={<Home />} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
