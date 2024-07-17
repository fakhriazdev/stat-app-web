"use client";

import { useTheme } from "next-themes";
import {Moon, Sun1} from "iconsax-react";
const ThemeSwitcher = () => {

    const {systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger= () => {

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
            return (
                <div className="rounded-full w-6 h-6 text-white" role="button" onClick={() =>
                    setTheme('light')} >
                    <Sun1 size="26"/>
                </div>
            )
        }

        else {
            return (
                <div className="w-6 h-6 rounded-full" role="button" onClick={() =>
                    setTheme('dark')} >
                    <Moon size="26"/>
                </div>
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