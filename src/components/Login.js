import React, { useRef } from 'react';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="h-full w-full flex flex-1 items-center justify-center">
      <div className="flex flex-col border rounded-md p-12">
        <h1 className="text-xl font-bold text-center mb-2">
          Bejelentkezés
        </h1>
        <h2 className="mb-12 text-center">
          Tovább a Google Drive szolgáltatásba
        </h2>
        <form className="flex flex-col space-y-4 w-96">
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
            <a href="https://www.google.com" className="text-blue-600 hover:text-blue-800">
              Fiók létrehozása
            </a>

            <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white border py-2 px-6 rounded-md">
              Bejelentkezés
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};
