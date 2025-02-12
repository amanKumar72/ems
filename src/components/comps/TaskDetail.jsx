import PropTypes from "prop-types";
const TaskDetail = ({ task, color }) => {
    console.log(color)
  return (
    <div
      className={`flex flex-col md:w-[350px] lg:w-[450px] bg-${color} rounded-lg m-2 p-5  `}
    >
      <div className="flex justify-between items-center ">
        <h2 className="bg-red-700 px-4 py-2 rounded-md font-semibold ">
          {task.catagory}
        </h2>
        <h3 className="font-semibold">{task.date}</h3>
      </div>
      <h1 className="text-2xl font-bold my-2">{task.title}</h1>
      <h2 className="md:text-lg font-semibold my-1">{task.description}</h2>
      <div className="flex justify-between items-center my-2">
        <button className="bg-green-500 px-1 md:px-3 py-1 rounded-md text-white text-sm font-semibold hover:bg-green-400">
          mark as completed
        </button>
        <button className="bg-red-500 px-1 md:px-3 py-1 rounded-md text-white font-semibold text-sm hover:bg-red-400">
          mark as failed
        </button>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  //+
  task: PropTypes.shape({
    //+
    catagory: PropTypes.string.isRequired, //+
    date: PropTypes.string.isRequired, //+
    title: PropTypes.string.isRequired, //+
    description: PropTypes.string.isRequired, //+
  }).isRequired, //+
  color: PropTypes.string.isRequired, //+
}; //+

export default TaskDetail;
