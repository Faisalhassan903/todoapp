import React, { useState } from "react";
import { CheckCircleIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import backgroundImage from '../assets/Background-image.jpg';
import "./Todo.css";
import "./starAnimation.css";
import { MoonIcon } from "@heroicons/react/solid";
import SunIcon from "@heroicons/react/solid/SunIcon";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const addOrUpdateTodo = () => {
    if (task.trim() === "") {
      return;
    }

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setTask("");
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const TodoPDF = () => (
    <Document>
      <Page>
        {todos.map((todo, index) => (
          <Text key={index}>{todo}</Text>
        ))}
      </Page>
    </Document>
  );

  return (
    <div
      className={`relative min-h-screen ${darkMode ? "dark" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Star Animation */}
      <div className="stars-container">
        {[...Array(5).keys()].map((starIndex) => (
          <div
            key={starIndex}
            className="star absolute bg-white-400 rounded-full w-1 h-1 animate-twinkle"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          ></div>
        ))}
      </div>
      {/* End Star Animation */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black" : "bg-gray-800"
        } bg-opacity-75`}
      ></div>
      <div className="container-fluid mx-auto mt-300 text-center relative z-10">
        <h1
          className={`text-3xl font-semibold mb-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Todo App
        </h1>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className={`border rounded py-2 px-3 w-64 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${
              darkMode ? "text-white bg-gray-700" : "text-black bg-white"
            }`}
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className={`ml-2 ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-300 hover:bg-gray-500"
            } text-white font-bold py-2 px-4 rounded`}
            onClick={addOrUpdateTodo}
          >
            <CheckCircleIcon className="h-5 w-5" />
          </button>
          <button
            className={`ml-2 ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-900"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
        <PDFDownloadLink document={<TodoPDF />} fileName="todos.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : (
              <button
                className={`mt-4 ${
                  darkMode
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-blue-500 hover:bg-blue-700"
                } text-white font-bold py-2 px-4 rounded`}
              >
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
        <ul className={`mt-4 ${darkMode ? "text-white" : "text-black"}`}>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              {todo}

              <div>
                <button
                  className={`editButton ${
                    darkMode ? "text-yellow-500" : "text-blue-500"
                  }`}
                  onClick={() => editTodo(index)}
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  className={`removeButton ${
                    darkMode ? "text-red-500" : "text-blue-500"
                  }`}
                  onClick={() => removeTodo(index)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
