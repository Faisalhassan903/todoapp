import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

// Firebase configuration (Make sure to use your own configuration)
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

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Signup
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);

      // Redirect to Todo component after successful signup
      navigate("/todo");
    } catch (error) {
      console.error("Error registering user:", error.message);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-dark-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-lg shadow-md">
        {/* Your signup form goes here */}
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
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
              {/* Password strength indicator can be added here */}
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
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
              Register
            </button>
          </div>
        </form>
        {/* Your signup form ends here */}
      </div>
    </div>
  );
};

export default Signup;
