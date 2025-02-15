import { useContext } from "react";
import TaskDetail from "../comps/TaskDetail";
import { AuthenticationContext } from "../../context/AuthContext";

const AllTasks = () => {
  const context=useContext(AuthenticationContext)
  const user = context.getUser().data;

  const bgColors = ["lime-500", "red-500", "fuchsia-500", "blue-500"];
  const tasks = user.tasks;

  return (
    <div className="flex gap-2 px-3 flex-wrap">
      {tasks.map((taske, ind) => (
        <TaskDetail
          key={ind}
          id={user.id}
          taskId={ind}
          task={taske}
          color={bgColors[ind % bgColors.length]}
        />
      ))}
    </div>
  );
};

export default AllTasks;
