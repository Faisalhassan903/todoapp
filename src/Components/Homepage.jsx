import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bigpicture from "../assets/big-picture.jpg";
import service1Image from "../assets/service1.jpg";
import service2Image from "../assets/service2.jpg";
import service3Image from "../assets/service3.jpg";
import service4Image from "../assets/service4.jpg";
import Login from "./Login";
import Signup from "./Signup.jsx";
import './Homepage.css';


const Homepage = ({ user, setUser }) => {
  const services = [
    { image: service1Image, name: "Marketing", link: "/service1" },
    { image: service2Image, name: "Web Design", link: "/service2" },
    { image: service3Image, name: "Web Development", link: "/service3" },
    { image: service4Image, name: "Cloud Computing", link: "/service4" },
  ];

  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Set the loading duration (in milliseconds)

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div
      className={`flex flex-col bg-web text-white ${
        isLoading ? "loading" : ""
      }`}

    >
      {isLoading && (
        <div className="loading-spinner">
          {/* Add your loading spinner or animation here */}
          Loading...
        </div>
      )}

      {!isLoading && (
        <>
         {/* Add the Ant Design Animation component */}
      
          {showForm ? (
            <div className="p-8">
              {user ? (
                <>
                  <h1 className="text-4xl font-bold mb-4">
                    Welcome, {user.email}!
                  </h1>
                  <p className="text-gray-300">You are now logged in.</p>
                </>
              ) : (
                <>
                  <Login setUser={setUser} />
                  <Signup setUser={setUser} />
                  <div className="text-center mt-4">
                    <button
                      onClick={toggleForm}
                      className="text-indigo-600 hover:underline focus:outline-none"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              {/* Introduction Section */}
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">
                  Welcome to Our Website
                </h1>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed non pulvinar ex. In hac habitasse platea
                  dictumst.
                </p>
              </div>

              {/* Big Picture Section with Carousel */}
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
              >
                <div>
                  <img
                    src={Bigpicture}
                    alt="Big Picture 1"
                    className="w-full h-auto object-cover"
                  />
                  
                </div>
                <div>
                  <img
                    src={Bigpicture}
                    alt="Big Picture 1"
                    className="w-full h-auto object-cover"
                  />
                  
                </div>
                <div>
                  <img
                    src={Bigpicture}
                    alt="Big Picture 1"
                    className="w-full h-auto object-cover"
                  />
                  
                </div>
                <div>
                  <img
                    src={Bigpicture}
                    alt="Big Picture 1"
                    className="w-full h-auto object-cover"
                  />
                  
                </div>
                <div>
                  <img
                    src={Bigpicture}
                    alt="Big Picture 1"
                    className="w-full h-auto object-cover"
                  />
                  
                </div>
                
                {/* Add more carousel items as needed */}
              </Carousel>

              {/* Services Section */}
<div className="p-8 flex-grow border-l border-r border-gray-600 relative homepage-services">
  <div className="flex flex-wrap justify-center -mx-2">
    {services.map((service, index) => (
      <div
        key={index}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 service-item"
      >
        <div className="relative group overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-60 object-cover rounded transition-transform transform group-hover:scale-110"
          />
          <p className="text-gray-300 text-center absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity service-name">
            <a href={service.link}>{service.name}</a>
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


              {/* Team Members Section */}
              <div className="p-8 flex-grow border-l border-r border-gray-600 flex justify-center items-center">
                {/* ... (unchanged) */}
              </div>

              {/* About Section */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Sed non pulvinar ex. In hac habitasse platea
                  dictumst.
                </p>
              </div>

              {/* Login/Signup Section */}
              <div className="p-8 text-center">
                {user ? (
                  <p>
                    You are already logged in as {user.email}.{" "}
                    <button
                      onClick={toggleForm}
                      className="text-indigo-600 hover:underline focus:outline-none"
                    >
                      Switch account
                    </button>
                  </p>
                ) : (
                  <p>
                    If you have an account,{" "}
                    <button
                      onClick={toggleForm}
                      className="text-indigo-600 hover:underline focus:outline-none"
                    >
                      log in here
                    </button>
                    . If not,{" "}
                    <button
                      onClick={toggleForm}
                      className="text-indigo-600 hover:underline focus:outline-none"
                    >
                      sign up now
                    </button>
                    !
                  </p>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Homepage;
