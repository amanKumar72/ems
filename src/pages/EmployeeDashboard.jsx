import Header from "../components/comps/Header"
import TaskListOverview from "../components/TaskList/TaskListOverview"
import AllTasks from "../components/TaskList/AllTasks"
const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-full">
      <Header/>
      <TaskListOverview></TaskListOverview>
      <AllTasks></AllTasks>
    </div>
  )
}

export default EmployeeDashboard
