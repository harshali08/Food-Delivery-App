// import "../styles/SignInLeft.css";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        location: user.location,
      }),
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        alert("Sign up successful!");
      } 
      // else {
      //   alert(data.message); // Display the server's error message.
      // }
    } else {
      alert("Enter Valid Credentials!");
    }
  };
  
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className=" flex justify-center mt-8 ">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2 me-5">
                  <input
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={onChange}
                    type="text"
                    autoComplete="name"
                    placeholder="Enter First Name"
                    required
                    className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                    style={{ borderColor: "#98B3D6" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2 ">
                  <input
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    type="email"
                    autoComplete="email"
                    placeholder="Enter Your Address"
                    required
                    className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                    style={{ borderColor: "#98B3D6" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Create Password
                  </label>
                </div>
                <div className="mt-2">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={onChange}
                      type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                      autoComplete="current-password"
                      placeholder="Enter Password"
                      required
                      className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                      style={{ borderColor: "#98B3D6" }}
                    />
                    <span
                      className="absolute right-3 top-2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2 me-5">
                  <input
                    id="location"
                    name="location"
                    value={user.location}
                    onChange={onChange}
                    type="text"
                    autoComplete="location"
                    placeholder="Enter Your Location"
                    required
                    className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                    style={{ borderColor: "#98B3D6" }}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="flex block w-full text-xs font-bold  text-gray-500 outline-none">
                  <input type="checkbox" />
                  <h6 className="mx-2">
                    {" "}
                    By signing up, you agree to our Terms & Conditions
                  </h6>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full px-3 py-1.5 text-lg font-bold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "#1CB5BD" }}
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-2 text-center font-bold py-4 text-sm text-gray-500">
              Already a member?{" "}
              <a
                href="/signin"
                className="font-semibold leading-6  cursor-pointer"
                style={{ color: "#1CB5BD" }}
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
