import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaChartLine, FaCalendarAlt, FaUsersCog } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <FaUsers />
            <span>EMS</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="hover:text-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-blue-200">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-[#1d1d1d] py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Employee Management System
          </h1>
          <p className="text-xl mb-8">
            Streamline your workforce management with our powerful tools
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-400 p-6 rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">
                Performance Tracking
              </h2>
              <p>Monitor and analyze employee performance with ease.</p>
            </div>
            <div className="bg-blue-400 p-6 rounded-lg shadow-md">
              <FaCalendarAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">
                Attendance Management
              </h2>
              <p>Efficiently track and manage employee attendance.</p>
            </div>
            <div className="bg-blue-400 p-6 rounded-lg shadow-md">
              <FaUsersCog className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">
                Employee Data Management
              </h2>
              <p>Securely store and manage employee information.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Employee Management System. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
