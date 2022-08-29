import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function NavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <nav className="bg-white border border-gray-200 p-4">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-600">Google Drive Clone</span>
        </Link>
        <div className="w-auto" id="navbar-default">
          <button onClick={handleLogout} className="text-gray-500 hover:text-blue-600">
            Kijelentkezés
          </button>
        </div>
      </div>
    </nav>
  )
}
