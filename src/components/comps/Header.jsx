import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthContext";

const Header = () => {
  const context=useContext(AuthenticationContext)
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem("user")).data;
  return (
    <div className="flex-col justify-between p-3 md:p-5 ">
      <h3 className="text-lg md:text-2xl ">Hello</h3>
      <div className="flex justify-between gap-2 ">
        <h2 className="text-xl md:text-3xl font-semibold">{user.firstName} 👋</h2>
        <button className=" bg-red-600 px-4 py-1 md:px-6 md:py-2 rounded-lg font-semibold text-lg md:text-xl" onClick={()=>{context.logOut();navigate('/login')}}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
