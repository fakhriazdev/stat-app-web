'use client';

import React, { useState} from 'react';
import { loginAction } from '../lib/features/AuthSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../lib/store';
import Link from "next/link";


export default function Page() {

  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });


  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(loginAction(form));
    } catch (error) {
    }
  };

  // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //
  //     const resultAction = dispatch(authAction(authService.login(form)));
  //
  //         // Assuming successful login, navigate to another page
  //         // if (statusCode === 200) {
  //         //     router.push('/dashboard'); // Replace with your desired route
  //         // }
  //
  // };

  return (
    <div className="absolute left-0 top-0 w-full h-full">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-background dark:bg-dark-background m-auto">
        <div className="w-96 bg-white dark:bg-black rounded-2xl px-2 py-4">
          <h1 className="text-center text-xl font-normal mb-4">Login</h1>
          <form className="w-full rounded p-4 mb-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="bg-background/80 dark:bg-dark-background appearance-none border rounded-2xl w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                type="text"
                placeholder="Your Username"
                onChange={handleFormInput}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-background/80 dark:bg-dark-background appearance-none border border-red-500 rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Your Passowrd"
                onChange={handleFormInput}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-primary/60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-500"
                href={'/register'}
              >
                dont have an account?
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Stat app.
          </p>
        </div>
      </div>
    </div>
  );
}
