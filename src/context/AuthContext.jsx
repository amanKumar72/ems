import { createContext, useState } from "react";

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    designation: "abc",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    designation: "abc",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2024-10-11",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2024-10-09",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    designation: "abc",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2024-10-08",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    designation: "abc",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2024-10-13",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement continuous integration pipeline",
        taskDate: "2024-10-11",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    designation: "abc",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-10-09",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2024-10-12",
        category: "Support",
      },
    ],
  },
];

const admins = [
  {
    id: 1,
    email: "a1@e.com",
    password: "123",
    employees: [1, 2, 3],
    firstName: "Aman",
  },
  {
    id: 2,
    email: "a2@e.com",
    password: "123",
    employees: [4, 5],
    firstName: "Sunny",
  },
];

export const AuthenticationContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthenticationProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState(employees);
  const [adminData, setAdminData] = useState(admins);

  // Add new employee by an admin
  const addEmployee = (adminId, data) => {
    const employee = {
      id: employeesData.length + 1,
      firstName: data.name,
      email: data.email,
      password: data.password,
      designation: data.designation,
      taskCounts: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [],
    };

    const admin = adminData[adminId - 1];
    admin.employees.push(employee.id);
    setEmployeesData([...employeesData, employee]);
    setAdminData([...adminData]);

    localStorage.setItem(
      "user",
      JSON.stringify({
        role: "admin",
        data: { ...admin },
      })
    );
  };

  // Remove employee by a admin
  const removeEmployee = (adminId, id) => {
    setEmployeesData(employeesData.filter((employee) => employee.id !== id));
    setAdminData([...adminData, adminData[adminId].employees.pop(id)]);

    localStorage.setItem(
      "user",
      JSON.stringify({
        role: "admin",
        data: [...adminData, adminData[adminId].employees.pop(id)],
      })
    );
  };

  //add a new admin or create a new user
  const signUp = (admin) => {
    const Log = {
      firstName: admin.name,
      email: admin.email,
      password: admin.password,
      employees: [],
      id: adminData.length + 1,
    };
    setAdminData([...adminData, Log]);
    localStorage.setItem("user", JSON.stringify({ role: "admin", data: Log }));
  };

  //login as a user or admin
  const login = (email, password) => {
    const admin = adminData.find(
      (admin) => admin.email == email && admin.password == password
    );
    const employee = employeesData.find(
      (employee) => employee.email == email && employee.password == password
    );
    if (employee) {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "employee", data: employee })
      );
      return { role: "employee", employee };
    }

    if (admin) {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "admin", data: admin })
      );
      return { role: "admin", admin };
    }
  };

  //logout the user or admin from the local storage
  const logOut = () => {
    localStorage.removeItem("user");
  };

  //get the user from local storage
  const getUser = () => JSON.parse(localStorage.getItem("user"));

  const getEmployees = (ids) => {
    return employeesData.filter((emp) => ids.includes(emp.id));
  };

  //add a new task to an employee
  const addTask = (data) => {
    const employee = employeesData.find(
      (employee) => employee.firstName == data.assignTo.trim()
    );
    employee.tasks.push({
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: data.name,
      taskDescription: data.description,
      taskDate: data.date,
      category: data.category,
    });
    employee.taskCounts.active++;
    employee.taskCounts.newTask++;
    setEmployeesData([
      ...employeesData.filter((emp) => emp.firstName != data.assignTo),
      employee,
    ]);
  };

  //mark as completed
  const markCompleted = (employeeId, taskId) => {
    const employee = employeesData.find((emp) => emp.id === employeeId);

    if (employee.tasks[taskId] && !employee.tasks[taskId].completed) {
      employee.tasks[taskId].completed = true;
      employee.tasks[taskId].active = false;
      employee.taskCounts.completed++;
      employee.taskCounts.active--;
    }

    setEmployeesData([
      ...employeesData.filter((emp) => emp.id !== employeeId),
      employee,
    ]);
    localStorage.setItem(
      "user",
      JSON.stringify({ role: "employee", data: employee })
    );
  };

  // mark as failed
  const markFailed = (employeeId, taskId) => {
    const employee = employeesData.find((emp) => emp.id === employeeId);

    if (employee.tasks[taskId] && !employee.tasks[taskId].failed) {
      employee.tasks[taskId].failed = true;
      employee.tasks[taskId].active = false;
      employee.taskCounts.failed++;
      employee.taskCounts.active--;
    }
    setEmployeesData([
      ...employeesData.filter((emp) => emp.id !== employeeId),
      employee,
    ]);
    localStorage.setItem(
      "user",
      JSON.stringify({ role: "employee", data: employee })
    );
  };

  return (
    <AuthenticationContext.Provider
      value={{
        employeesData,
        adminData,
        signUp,
        login,
        logOut,
        getUser,
        addEmployee,
        removeEmployee,
        addTask,
        getEmployees,
        markCompleted,
        markFailed,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
