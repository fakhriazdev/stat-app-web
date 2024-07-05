"use client";

import { useTheme } from "next-themes";
const ThemeSwitcher = () => {

    const {systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger= () => {

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
            return (
                <div className="bg-white rounded-full w-6 h-6 text-white" role="button" onClick={() =>
                    setTheme('light')} ></div>
            )
        }

        else {
            return (
                <div className="w-6 h-6 bg-black rounded-full" role="button" onClick={() =>
                    setTheme('dark')} ></div>
            )
        }
    };
    return (
        <>
            {renderThemeChanger()}
        </>
    );
};

export default ThemeSwitcher;