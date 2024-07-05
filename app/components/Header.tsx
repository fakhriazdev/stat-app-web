import React from 'react';
import ThemeSwitcher from "@/app/utils/themes/ThemeSwitcher";

const Header = () => {
    return (
        <div className="sticky top-0 flex justify-between bg-white dark:bg-dark-black text-primary dark:text-dark-primary px-12 py-3 mb-6 z-50">
            <p className='font-bold'>Stat</p>
            <ThemeSwitcher/>
        </div>
    );
};

export default Header;