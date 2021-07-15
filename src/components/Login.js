import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [option, setOption] = useState("");
  const options = [
    { value: "science", label: "Science" },
    { value: "technology", label: "Technology" },
    { value: "sports", label: "Sports" },
  ];
  const onSubmit = (data) => {
    console.log(data, option);
    history.push(`/play/${option}`);
  };
  const handleSelectChange = (e) => {
    console.log(e.value);
    setOption(e.value);
  };
  return (
    <div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <p className="bg-black text-white font-bold text-xl p-4">QUIZ</p>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome to Quiz App.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email")}
                  required
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("password")}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Quiz Type
                </label>
                <Select
                  className="basic-single shadow"
                  isSearchable={true}
                  name="color"
                  options={options}
                  onChange={(e) => handleSelectChange(e)}
                />
              </div>
              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
              />
            </form>
            <div className="text-center pt-12 pb-12">
              {/* <p>
                Don't have an account?{" "}
                <a href="register.html" className="underline font-semibold">
                  Register here.
                </a>
              </p> */}
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
