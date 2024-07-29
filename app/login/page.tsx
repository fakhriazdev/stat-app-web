'use client';

import React from 'react';
import { loginAction } from '../lib/features/AuthSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../lib/store';
import Link from "next/link";
import {useFormik} from "formik";
import * as y from "yup";


export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  const schema = y.object({
    username: y.string().required(),
    password: y.string().required(),
  })

  const {
    values: { username, password },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async () => {dispatch(loginAction({username,password}));
    },
  });


  return (
      <div className="absolute left-0 top-0 w-full h-full">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-background dark:bg-dark-background m-auto">
        <div className="w-96 bg-white dark:bg-black rounded-2xl px-2 py-4">
          <h1 className="text-center text-xl font-normal mb-4">Login</h1>
          <form className="w-full rounded p-4 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
              >
                Username {touched.username && errors.username ? (
                  <span className="text-red-500 text-xs italic">*{errors.username}</span>
              ) : null}
              </label>
              <input
                  className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.username && errors.username ? 'border-red-500 placeholder:text-red-500 ' : null}  rounded-2xl w-full py-2 px-3 dark:text-white leading-tight focus:outline-none focus:shadow-outline mb-1`}
                  name="username"
                  type="text"
                  required
                  placeholder="Insert Your Username"
                  onBlur={handleBlur}
                  value={username}
                  onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password   {touched.password && errors.password ? (
                  <span className="text-red-500 text-xs italic">*{errors.password}</span>
              ) : null}
              </label>
              <input
                className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.password && errors.password ? 'border-red-500 placeholder:text-red-500' : null} rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-1 leading-tight focus:outline-none focus:shadow-outline`}
                name="password"
                type="password"
                placeholder="Insert Your Passowrd"
                required
                value={password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                  disabled={!isValid || !dirty}
                className={`${!isValid || !dirty ? 'bg-primary/20 text-white/20' : 'bg-primary hover:bg-primary/80 text-white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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
