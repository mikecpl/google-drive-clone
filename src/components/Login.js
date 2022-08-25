import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (e) {
      setError('Hibás adatok! Kérjük próbálja újra!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-full w-full flex flex-1 items-center justify-center">
      <div className="flex flex-col border rounded-md p-12">
        <h1 className="text-xl font-bold text-center mb-2">
          Bejelentkezés
        </h1>
        <h2 className="mb-12 text-center">
          Tovább a Google Drive szolgáltatásba
        </h2>
        <form className="flex flex-col space-y-4 w-96" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-600">
              {error}
            </div>
          )}

          <label className="relative cursor-text">
            <input type="text"
              name="email"
              ref={emailRef}
              className="border p-4 rounded-md w-full text-gray-600 focus:text-blue-600 bg-white border-black border-opacity-50 outline-none focus:border-blue-600 placeholder-black placeholder-opacity-0 transition duration-200"
              placeholder="E-mail cím"
            />
            <span className="text-gray-600 text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text">
              E-mail cím
            </span>
          </label>

          <label className="relative cursor-text">
            <input type="password"
              name="password"
              ref={passwordRef}
              className="border p-4 rounded-md w-full text-gray-600 focus:text-blue-600 bg-white border-black border-opacity-50 outline-none focus:border-blue-600 placeholder-black placeholder-opacity-0 transition duration-200"
              placeholder="Jelszó"
            />
            <span className="text-gray-600 text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text">
              Jelszó
            </span>
          </label>

          <div className="text-sm text-gray-600 text-justify">
            Nem a saját számítógépét használja? Használja a vendég módot a privát bejelentkezéshez.
          </div>

          <div className="flex flex-row justify-between items-center space-x-4">
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">
              Fiók létrehozása
            </Link>

            <button disabled={isLoading} type="submit" className="bg-blue-600 hover:bg-blue-800 text-white border py-2 px-6 rounded-md">
              Bejelentkezés
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};
