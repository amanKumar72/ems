import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col gap-4 px-2 items-center justify-center ">
      <h1 className="text-2xl font-bold">Sign Up as an Admin</h1>
      <div className="flex flex-col border-2 p-5  border-red-600 rounded-xl ">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col w-full  justify-center gap-5 "
        >
          <input
            {...register("name", { required: true })}
            className="border-2 border-red-400 outline-none rounded-full px-4  py-2 md:px-8 md:py-4 text-base md:text-lg font-semibold placeholder:text-zinc-400 text-black"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-400">name is required</span>
          )}
          <input
            {...register("email", { required: true })}
            className="border-2 border-red-400 outline-none rounded-full px-4  py-2 md:px-8 md:py-4 text-base md:text-lg font-semibold placeholder:text-zinc-400 text-black"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-400">email is required</span>
          )}

          <div className="flex relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="create a password"
              className="border-2 border-red-400 outline-none rounded-full w-full px-4 py-2 md:px-6 md:py-4 text-base md:text-lg font-semibold placeholder:text-zinc-400 text-black"
              {...register("password", { required: true })}
            />

            <button
              type="button"
              className="absolute right-4 top-3 md:right-6 md:top-6 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-xl text-gray-500" />
              ) : (
                <FaEye className="text-xl text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-400">password is required</span>
          )}
          <input
            className="border-none w-[50%] self-center rounded-full px-9 py-2 md:px-12 md:py-2 bg-green-400  text-xl md:text-2xl cursor-pointer font-bold hover:bg-green-500 "
            type="submit"
            value="signup"
          />
        </form>
        <h2 className="text-lg mx-4 my-2">
          Already have an account ?{" "}
          <NavLink
            to={"/login"}
            className="text-blue-500 underline cursor-pointer "
          >
            {" "}
            Login here !
          </NavLink>{" "}
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
