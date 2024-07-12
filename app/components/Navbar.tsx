'use client'
import React, {useEffect, useState} from 'react';

import {AddSquare, Home, SearchNormal1} from "iconsax-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = (props: { children: any; }) => {
    const {children} = props;
    const pathname = usePathname()
    let segments = pathname.split('/')
    const isNavbarVisible = !["/login", "/register"].includes(pathname);

    const [activeSegment, setActiveSegment] = useState(segments[1]);

    // Update activeSegment whenever pathname changes
    useEffect(() => {
        setActiveSegment(segments[1]);
    }, [pathname]);

    const isActive = (pathname: string) => {
        return activeSegment === pathname ? 'text-primary' : '';
    };
    return (
        <>
            {isNavbarVisible ?
                <section
                    className="relative max-w-7xl flex flex-col md:flex-row gap-2 justify-between mx-auto md:px-4 lg:px-8">
                    <nav
                        className="sticky top-10 md:top-16 lg:top-16 w-full md:w-2/12 lg:2/12 md:h-44 lg:h-44 mx-auto z-40">
                        <div
                            className="flex md:flex-col gap-6 justify-around px-3 py-3 md:p-3 lg:p-3 bg-white dark:bg-dark-black md:rounded-3xl">
                            <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                                <AddSquare
                                    size="28"
                                />
                                <h1 className="hidden md:block lg:block text-sm">New Post</h1>
                            </div>
                            <Link href="/profile/schacian29"
                                  className={`flex flex-col md:flex-row items-center justify-start gap-3 ${isActive('profile')}`}>
                                <div className='w-7 h-7 my-auto bg-white rounded-xl'></div>
                                <h1 className="hidden md:block lg:block text-sm">Profile</h1>
                            </Link>
                            <Link href="/"
                                  className={`flex flex-col md:flex-row items-center justify-start gap-3 ${isActive('')}`}>
                                <Home
                                    size="28"
                                />
                                <h1 className="hidden md:block lg:block text-sm">Home</h1>
                            </Link>
                            <Link href="/explore"
                                  className={`flex flex-col md:flex-row items-center justify-start gap-3 ${isActive('explore')}`}>
                                <SearchNormal1
                                    size="28"
                                />
                                <h1 className="hidden md:block lg:block text-sm">Search</h1>
                            </Link>
                        </div>
                    </nav>
                    <div className='w-full min-h-svh md:w-10/12 lg:w-10/12 rounded-3xl bg-white dark:bg-dark-black p-3'>
                        {children}
                    </div>
                </section>
                :
                <>{children}</>
            }

        </>
    );
};

export default Navbar;
