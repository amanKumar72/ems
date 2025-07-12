import { useContext } from "react";
import TaskDetail from "../comps/TaskDetail";
import { AuthenticationContext } from "../../context/AuthContext";

const AllTasks = () => {
  const context=useContext(AuthenticationContext)
  const user = context.getUser().data;

  const bgColors = ["bg-purple-400", "bg-red-500", "bg-blue-500", "bg-yellow-500"];
  const tasks = user.tasks;

  return (
    <div className="flex gap-2 px-3 flex-wrap">
      {tasks.map((task, ind) => (
        <TaskDetail
          key={ind}
          id={user.id}
          taskId={ind}
          task={task}
          color={bgColors[ind % bgColors.length]}
        />
      ))}
    </div>
  );
};

export default AllTasks;
