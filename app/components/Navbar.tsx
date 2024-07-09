'use client'
import React, {useRef, useLayoutEffect, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {AddSquare, GlobalSearch, Home, SearchNormal1} from "iconsax-react";



const Navbar = (props: { children: any; }) => {
    const {children} = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: navRef.current!,
            pin: true,
            start: "top-=48px",
            end: document.body.offsetHeight
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <>
        <section ref={containerRef} className="relative max-w-7xl flex flex-col md:flex-row gap-2 justify-between mx-auto md:px-4 lg:px-8">
            <nav ref={navRef} className="w-full md:w-2/12 lg:2/12 md:h-44 lg:h-44 mx-auto z-40">
                <div
                    className="flex sm:flex-col gap-6 justify-around px-3 py-3 md:p-3 lg:p-3 bg-white dark:bg-dark-black md:rounded-3xl">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <AddSquare
                            size="28"
                        />
                        <h1 className="hidden md:block lg:block text-sm">New Post</h1>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <div className='w-7 h-7 my-auto bg-white rounded-xl'></div>
                        <h1 className="hidden md:block lg:block text-sm">Profile</h1>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <Home
                            size="28"
                        />
                        <h1 className="hidden md:block lg:block text-sm">Home</h1>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <SearchNormal1
                            size="28"
                        />
                        <h1 className="hidden md:block lg:block text-sm">Search</h1>
                    </div>
                </div>
            </nav>
            <div className='w-full md:w-10/12 lg:w-10/12 rounded-3xl bg-white dark:bg-dark-black p-2'>
                {children}
            </div>
        </section>
        </>
    );
};

export default Navbar;
