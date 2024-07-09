'use client'
import React, {useState} from 'react';
import Image from "next/image";
import {
    Activity,
    Heart,
    People,
    Personalcard,
    Share,
} from "iconsax-react";
import Detail from "@/app/profile/component/Detail";
import Post from "@/app/profile/component/Post";

export default function Page() {
    const [toogleContent, setToogleContent] = useState(true)
    const handleToogleContent = (value:boolean) :void=>{
        setToogleContent(value)
    }
    console.log(toogleContent)
    return (
        <>
            <div className='relative justify-center items-center w-full rounded-tl-2xl rounded-tr-2xl bg-black h-96 text-white'>
                <Image
                    src="/background.jpeg"
                    width={1000}
                    height={1000}
                    alt="background stat"
                    className="flex flex-col justify-center items-center w-full rounded-2xl h-80 text-black object-cover"/>
                <div className="w-full absolute backdrop-blur rounded-b-2xl bottom-0 bg-black/20 py-3 px-4">
                    <div className="w-full md:flex sm:flex-row md:flex-row justify-between mb-4 gap-2">
                        <div className='relative flex gap-2'>
                            <div className="w-14 h-14 lg:w-24 lg:h-24 rounded-full bg-white my-auto mb-4"></div>
                            <div className='flex justify-center flex-col'>
                                <h1 className='font-semibold text-sm md:text-md lg:text-xl'>Schachi an</h1>
                                <p className='text-sm font-light'>Illustrator</p>
                            </div>
                            <button
                                className='border-2 border-primary text-sm font-semibold bg-primary text-white md:w-20 lg:w-28 rounded-3xl py-1.5 px-3 my-auto'>Follow
                            </button>
                            <button
                                className='border-2 border-black text-sm font-semibold bg-white dark:bg-dark-background dark:border-dark-background dark:text-white text-black md:w-20 lg:w-28 rounded-3xl py-1.5 px-3 my-auto'>Edit
                                Profile
                            </button>
                        </div>
                        <div className='flex justify-around gap-4 text-center my-auto'>
                            <button className='flex justify-center gap-2'>
                                <Heart size="24" className="mx-auto"/>
                                <p className='text-sm'>500K</p>
                            </button>
                            <button className='flex justify-center gap-2'>
                                <People size="24" className="mx-auto"/>
                                <p className='text-sm'>20K</p>
                            </button>
                            <button className='flex justify-center gap-2'>
                                <Share size="24" className="mx-auto"/>
                                <p className='text-sm'>20K</p>
                            </button>
                        </div>
                    </div>

                    <div className="w-full text-md font-light my-2">
                        <p>Passionate designer creating visually stunning and functional designs. #Designer
                            #Creativity #Innovation</p>
                    </div>

                </div>
            </div>
            <div className="w-full flex gap-1 items-center justify-between mb-6">
                <button className="mx-auto p-2 flex flex-col w-full text-black dark:text-white bg-background dark:bg-dark-background" onClick={()=>handleToogleContent(true)}>
                    <Activity size="24" className="m-auto"/>
                    <h1 className="m-auto font-normal text-sm">Posts</h1>
                </button>
                <button className="mx-auto p-2 flex flex-col w-full text-black dark:text-white bg-background dark:bg-dark-background" onClick={()=>handleToogleContent(false)}>
                    <Personalcard size="24" className="m-auto"/>
                    <h1 className="m-auto font-normal text-sm">Details</h1>
                </button>
            </div>
            {toogleContent ? <Post /> : <Detail />}
        </>
    );
};

