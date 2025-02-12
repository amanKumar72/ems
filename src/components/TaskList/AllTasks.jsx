import TaskDetail from "../comps/TaskDetail"

const AllTasks = () => {
    const bgColors=['lime-400','red-400' ,'fuchsia-500','blue-500']
    const tasks=[{
        catagory: "Database",
        date: "11-02-2025",
        title: "Database Optimization",
        description:
          "Optamze the query for the better performance of the database",
      },{
        catagory: "Database",
        date: "11-02-2025",
        title: "Database Optimization",
        description:
          "Optamze the query for the better performance of the database",
      },{
        catagory: "Database",
        date: "11-02-2025",
        title: "Database Optimization",
        description:
          "Optamze the query for the better performance of the database",
      },{
        catagory: "Database",
        date: "11-02-2025",
        title: "Database Optimization",
        description:
          "Optamze the query for the better performance of the database",
      },{
        catagory: "Database",
        date: "11-02-2025",
        title: "Database Optimization",
        description:
          "Optamze the query for the better performance of the database",
      }]

  return (
    <div className="flex gap-2 px-3 flex-wrap">
        {tasks.map((taske,ind)=><TaskDetail key={ind} task={taske} color={bgColors[ind%bgColors.length]}/>)}
    </div>
  )
}

export default AllTasks
