import { useForm } from "react-hook-form";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreateMember = () => {
  const { register, handleSubmit ,} = useForm();
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const onSubmit = (data) => {
    data.password==data.confirmPassword?"true":"false";
    console.log(data);
    // submit the form to your server here
    nav(-1); // Navigate back to previous page
  };
  return (
    <div className="flex-col p-5 md:pt-8 ">
      <div className="flex gap-2 items-center mb-5">
        <IoChevronBackCircleOutline
          className="text-2xl hover:scale-120 cursor-pointer"
          onClick={() => nav(-1)}
        />
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Create Member
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-2 p-5 w-full bg-[#1e1c1c] rounded-2xl  ">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter name of employee"
            name="name"
            id="name"
            className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded-full outline-none bg-transparent border-[2px] border-red-400 mb-4"
            {...register("name", { required: true })}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email of employee"
            className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded-full outline-none bg-transparent border-[2px] border-red-400 mb-4"
            {...register("email", { required: true })}
          />
          <label htmlFor="designation">Designation </label>
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Designation of employee"
            className="text-sm py-1 px-2 md:text-lg md:py-2 md:px-4 md:w-4/5 rounded-full outline-none bg-transparent border-[2px] border-red-400 mb-4"
            {...register("designation", { required: true })}
          />

          <label htmlFor="password">Password</label>
          <div className="flex relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter password for employee"
              className="text-sm py-1 px-2 w-full md:text-lg md:py-2 md:px-4 md:w-4/5 rounded-full outline-none bg-transparent border-[2px] border-red-400 mb-4"
              {...register("password", { required: true })}
            />

            <button
              type="button"
              className="absolute right-4 top-2 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex relative ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="********"
              className="text-sm py-1 px-2 w-full md:text-lg md:py-2 md:px-4 md:w-4/5 rounded-full outline-none bg-transparent border-[2px] border-red-400 mb-4"
              {...register("confirmPassword", { required: true })}
            />

            <button
              type="button"
              className="absolute right-4 top-2 "
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>

          <Link
            to="/admin"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="m-auto border-none rounded-full px-9 py-2 md:px-12 md:py-4 bg-red-700 md:w-[50%]  text-xl md:text-2xl cursor-pointer font-bold hover:bg-red-600 text-center"
          >
            Create{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateMember;
