import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthContext";

const TaskListOverview = () => {
  const context = useContext(AuthenticationContext);

  const user = context.getUser().data;

  const taskListOverview = [
    { type: "New Task", value: user.taskCounts.newTask, color: "blue-500" },
    {
      type: "Completed Task",
      value: user.taskCounts.completed,
      color: "yellow-500",
      txtColor:'black'
    },
    {
      type: "Accepted Task",
      value: user.taskCounts.active,
      color: "green-500",
    },
    { type: "Failed Task", value: user.taskCounts.failed, color: "red-600" },
  ];
  return (
    <div className="flex justify-evenly flex-wrap md:flex-nowrap gap-5 px-5 py-7 screen ">
      {taskListOverview.map((task) => {
        return (
          <div
            key={task.type}
            className={`flex flex-col items-start justify-center rounded-xl w-[45%] py-3 px-6 md:py-6 md:px-9  gap-1  lg:gap-3 bg-${task.color} text-${task.txtColor}`}
          >
            <h2 className="text-xl font-semibold xl:text-4xl ">{task.value}</h2>
            <h3 className="text-lg font-medium xl:text-3xl">{task.type}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListOverview;
