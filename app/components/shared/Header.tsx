'use client';
import React from 'react';
import ThemeSwitcher from "@/app/utils/themes/ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/lib/store";
import {logoutAction} from "@/app/lib/features/AuthSlice";
import { useRouter } from 'next/navigation';


const Header = () => {
    const { isLoading } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const handleLogout = async() =>{
        await dispatch(logoutAction())
        router.push('/login');
    }
    return (
        <div
            className="sticky top-0 justify-between bg-white dark:bg-dark-black text-primary dark:text-dark-primary px-12 py-3 z-50 md:mb-4">
            <div className="flex justify-between">
            <p className='font-bold'>Stat</p>
                <div className="flex gap-2">
                <ThemeSwitcher/>
                <button
                    disabled={isLoading}
                    onClick={()=>{handleLogout()}}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;