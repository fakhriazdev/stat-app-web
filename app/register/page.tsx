'use client';

import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/lib/store";
import * as y from "yup";
import {useFormik} from "formik";
import {registerAction} from "@/app/lib/features/AuthSlice";
import React from "react";
import {redirect} from "next/navigation";

export default function Page(){
    const { isLoading } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch<AppDispatch>();
    const schema = y.object({
        name: y.string().required().min(3).max(20),
        username: y.string().required(),
        password: y.string().required().matches(/(?=.*[A-Z])/, 'at least one uppercase letter').matches(/.*[!@#$%^&*(),.?":{}|<>].*/, 'at least one special character'),
        confirmPassword: y.string().oneOf([y.ref('password')], 'Passwords must match').required()
    })

    const {
        values: { name, username, password,confirmPassword },
        errors,
        dirty,
        isValid,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: {
            name:"",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: schema,
        onSubmit: async () => {
            try{
            dispatch(registerAction({name, username, password}));
            redirect('/login');
            }catch (e){}
        },
    });

    return (
        <div className="absolute left-0 top-0 w-full h-full z-10">
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-background dark:bg-dark-background m-auto">
                <div className="w-[400px] bg-white dark:bg-black rounded-2xl px-2 py-4">
                    <h1 className="text-center text-xl font-normal mb-2">Register</h1>
                    <form className="w-full rounded p-4 mb-2" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                                Fullname {touched.name && errors.name ? (
                                <span className="text-red-500 text-xs italic">*{errors.name}</span>
                            ) : null}
                            </label>
                            <input
                                className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.name && errors.name ? 'border-red-500 placeholder:text-red-500' : null} rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-1 leading-tight focus:outline-none focus:shadow-outline`}
                                name="name"
                                type="text"
                                value={name}
                                onBlur={handleBlur}
                                placeholder="Your Fullname"
                                onChange={handleChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username {touched.username && errors.username ? (
                                <span className="text-red-500 text-xs italic">*{errors.username}</span>
                            ) : null}
                            </label>
                            <input
                                className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.username && errors.username ? 'border-red-500 placeholder:text-red-500' : null} rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-1 leading-tight focus:outline-none focus:shadow-outline`}
                                name="username"
                                value={username}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Your Username"
                                onChange={handleChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password {touched.password && errors.password ? (
                                <span className="text-red-500 text-xs italic">*{errors.password}</span>
                            ) : null}
                            </label>
                            <input
                                className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.password && errors.password ? 'border-red-500 placeholder:text-red-500' : null} rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-1 leading-tight focus:outline-none focus:shadow-outline`}
                                name="password"
                                value={password}
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Your Password"
                                onChange={handleChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Confirm Password {touched.confirmPassword && errors.confirmPassword ? (
                                <span className="text-red-500 text-xs italic">*{errors.confirmPassword}</span>
                            ) : null}
                            </label>
                            <input
                                className={`bg-background/80 dark:bg-dark-background appearance-none border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500 placeholder:text-red-500' : null} rounded-2xl w-full py-2 px-3 text-black dark:text-white mb-1 leading-tight focus:outline-none focus:shadow-outline`}
                                name="confirmPassword"
                                value={confirmPassword}
                                onBlur={handleBlur}
                                type="password"
                                placeholder="Confirm Password"
                                onChange={handleChange}/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                disabled={!isValid || !dirty || isLoading}
                                className={`${!isValid || !dirty || isLoading ? 'bg-primary/20 text-white/20' : 'bg-primary hover:bg-primary/80 text-white'} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                type="submit"
                            >
                                Sign Up
                            </button>
                            <Link
                                className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-500"
                                href={'/login'}>
                                have account? login
                            </Link>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Stat app.
                    </p>
                </div>
            </div>
        </div>
    )
}