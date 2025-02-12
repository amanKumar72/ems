const TaskListOverview = () => {
  const taskListOverview = [
    { type: "New Task", value: 1, color: "blue-500" },
    { type: "Completed Task", value: 1, color: "amber-300" ,textColor:'black-500'},
    { type: "Accepted Task", value: 1, color: "green-500" },
    { type: "Failed Task", value: 1, color: "red-600" },
  ];
  return (
    <div className="flex justify-evenly flex-wrap md:flex-nowrap gap-5 px-5 py-7 screen ">
      {taskListOverview.map((task) => {
        return (
          <div  
            key={task.type}
            className={`flex flex-col items-start justify-center rounded-xl w-[45%] py-3 px-6 md:py-6 md:px-9  gap-1  lg:gap-3 bg-${task.color} text-${task.textColor}`}
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
