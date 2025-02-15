import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthContext";
const TaskDetail = ({ task, color,id,taskId }) => {

  const context=useContext(AuthenticationContext)
  return (
    <div
      className={`flex flex-col w-full md:w-[350px] lg:w-[450px] bg-${color} rounded-lg m-2 p-5  `}
    >
      <div className="flex justify-between items-center ">
        <h2 className="bg-red-700 px-4 py-2 rounded-md font-semibold ">
          {task.category}
        </h2>
        <h3 className="font-semibold">{task.taskDate}</h3>
      </div>
      <h1 className="text-2xl font-bold my-2">{task.taskTitle}</h1>
      <h2 className="md:text-lg font-semibold my-1">{task.taskDescription}</h2>
      <div className="flex justify-center gap-5 items-center my-2">
        {!task.failed && <button className="bg-green-500 px-1 md:px-3 py-1 rounded-md text-white text-sm font-semibold hover:bg-green-400 cursor-pointer" onClick={()=>context.markCompleted(id,taskId)} >
         { !task.failed && !task.completed ? 'mark as completed':'completed'}
        </button>}
        {!task.completed && <button className="bg-red-500 px-1 md:px-3 py-1 rounded-md text-white font-semibold text-sm hover:bg-red-400 cursor-pointer" onClick={()=>context.markFailed(id,taskId)}  >
          {task.failed?'failed':'mark as failed'} 
        </button>}
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  //+
  task: PropTypes.shape({
    category: PropTypes.string.isRequired, //+
    taskDate: PropTypes.string.isRequired, //+
    taskTitle: PropTypes.string.isRequired, //+
    taskDescription: PropTypes.string.isRequired, //+
    active: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired, //+
    failed: PropTypes.bool.isRequired, //+
    newTask: PropTypes.bool.isRequired,
  }).isRequired, //+
  color: PropTypes.string.isRequired, //+
  id: PropTypes.number.isRequired, //+
  taskId: PropTypes.number.isRequired, //+
}; //+

export default TaskDetail;
