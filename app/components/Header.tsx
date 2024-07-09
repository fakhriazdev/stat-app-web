import React from 'react';
import ThemeSwitcher from "@/app/utils/themes/ThemeSwitcher";

const Header = () => {
    return (
        <div
            className="sticky top-0 justify-between bg-white dark:bg-dark-black text-primary dark:text-dark-primary px-12 py-3 z-50 md:mb-4">
            <div className="flex justify-between">
            <p className='font-bold'>Stat</p>
            <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Header;