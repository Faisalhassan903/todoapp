import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAZgbgiJkt2GrVvmZSZrQiUsKfX_JgpdDA",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);

      // Set the user in the parent component
      setUser(user);

      // Redirect to Todo component after successful login
      navigate("/todo");
    } catch (error) {
      console.error("Error signing in:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-lg shadow-md">
        {/* Your Tailwind CSS logo goes here */}
        <img
          className="mx-auto h-10 w-auto mb-6"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        {/* Your Tailwind CSS logo ends here */}

        {/* Your login form goes here */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {/* Your form fields go here */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 leading-5 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 leading-5 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="text-red-500 text-sm">{error}</div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-500 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          {/* Your already registered link goes here */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already registered?{" "}
            <a
              href="/signup" // Replace with your signup route
              className="font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none"
            >
              Sign up
            </a>
          </p>
          {/* Your already registered link ends here */}
        </form>
        {/* Your login form ends here */}
      </div>
    </div>
  );
};

export default Login;
