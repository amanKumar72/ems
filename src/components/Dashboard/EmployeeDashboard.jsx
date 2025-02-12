import Header from "../comps/Header"
import TaskListOverview from "../TaskList/TaskListOverview"
import AllTasks from "../TaskList/AllTasks"
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
