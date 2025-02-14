import TaskDetail from "../comps/TaskDetail"

const AllTasks = () => {

  
  const user=JSON.parse(localStorage.getItem("user")).data;
  console.log("User",user.tasks);

    const bgColors=['lime-500','red-500' ,'fuchsia-500','blue-500']
    const tasks=user.tasks

  return (
    <div className="flex gap-2 px-3 flex-wrap">
        {tasks.map((taske,ind)=><TaskDetail key={ind} task={taske} color={bgColors[ind%bgColors.length]}/>)}
    </div>
  )
}

export default AllTasks
