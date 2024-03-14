import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Todo from './Components/Todo';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CVBuilder from './Components/CvBuilder';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        {/* Pass user and handleLogout function as props to Navbar */}
        <Navbar user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/cvbuilder" element={<CVBuilder user={user} />} /> {/* Change path to /cvbuilder */}
          <Route path="/todo" element={user ? <Todo /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/" element={<Homepage user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
