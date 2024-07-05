'use client'
import React, {useRef, useLayoutEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";



const Navbar = (props: { children: any; }) => {
    const {children} = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: navRef.current!,
            pin: true,
            start: "top-=80px",
            end: document.body.offsetHeight
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <section ref={containerRef} className="relative max-w-7xl flex flex-row gap-2 justify-between mx-auto pt-2 px-8">
        <nav ref={navRef} className="w-3/12 h-52 rounded-3xl bg-white dark:bg-dark-black p-4 mx-auto">
            <div className='mb-6 bg-primary rounded-full'>
                <h1 className='px-4 py-2'>Profile</h1>
            </div>
            <div>
                <div className='mb-4'>
                    <h1>Home</h1>
                </div>
                <div className='mb-4'>
                    <h1>Explore</h1>
                </div>
                <div className='mb-4'>
                    <h1>Search</h1>
                </div>
            </div>


        </nav>
            {children}
        </section>
    );};

export default Navbar;
