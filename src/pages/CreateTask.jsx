import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthContext";
const CreateTask = () => {
  const { register, handleSubmit } = useForm();
  const context = useContext(AuthenticationContext);

  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    const employeesIds = context.getUser().data.employees;

    const emps = context.getEmployees(employeesIds);
    setEmployees(emps, employeesIds);
    console.log(emps);  
  }, []);
  const nav = useNavigate();
  const onSubmit = (data) => {
    context.addTask(data);
    nav("/admin");
  };

  return (
    <div className="flex-col p-5 md:pt-8 ">
      <div className="flex gap-2 items-center mb-5">
        <IoChevronBackCircleOutline
          className="text-2xl hover:scale-120 cursor-pointer"
          onClick={() => nav(-1)}
        />
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Create Task
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <form
          className="flex flex-col w-full bg-[#1e1c1c] rounded-2xl "
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className="flex flex-col md:flex-row pt-2">
            <div className="flex flex-col gap-2 px-5 md:p-5 md:w-1/2">
              <label htmlFor="name" className="">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter title of task"
                name="name"
                id="name"
                className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                {...register("name", { required: "title is mandatory" })}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                {...register("date", { required: true })}
              />
              <label htmlFor="assignTo">Assign To</label>

              <select
                name="assignTo"
                id="assignTo"
                className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                {...register("assignTo", { required: true })}
              >
                {employees?.map((employee) => {

                 return <option className="bg-zinc-900 hover:bg-zinc-700" key={employee?.id} value={employee?.firstName}>{employee?.firstName}</option>;
                })}
              </select>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Database,Marketing ..."
                className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                {...register("category", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2 px-5 md:p-5 md:w-1/2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows="12"
                id="description"
                placeholder="Detailed description of the task (max 100 words)"
                className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4"
                {...register("description", { required: true })}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mx-auto mb-2 border-none rounded-full px-9 py-2 md:px-12 md:py-4 bg-black md:w-[50%]  text-xl md:text-2xl cursor-pointer font-bold hover:bg-[#101010] text-center"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
