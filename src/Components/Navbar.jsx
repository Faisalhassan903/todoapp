import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav style={{ backgroundColor: '#021D02' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Todo App
        </Link>
        <Link to="/" className="text-white text-xl font-bold">
          Cvbuilder
        </Link>
        <div>
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-white font-semibold px-4 py-2 rounded mr-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white font-semibold px-4 py-2 rounded mr-4"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white font-semibold px-4 py-2 rounded"
              >
                Signup
              </Link>

            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
