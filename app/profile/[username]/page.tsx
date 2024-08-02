'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {
    Activity,
    People,
    Personalcard, Star1,
} from "iconsax-react";
import Detail from "@/app/profile/[username]/component/Detail";
import Post from "@/app/profile/[username]/component/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/lib/store";
import {profileAction} from "@/app/lib/features/profileSlice";
import {getCookie} from 'cookies-next';

interface Profile {
    userId: string;
    user: {
        name: string;
    };
    title: string;
    projects: any[];
    follower: any[];
    bio: string;
    education: any[];
}

export default function Page() {
    const {username} = JSON.parse(getCookie('user') as string)
    const dispatch = useDispatch<AppDispatch>();
    const profile:Profile = useSelector((state: RootState) => state.profile.profile) as Profile;
    const [toggleContent, setToggleContent] = useState(true)
    const handleToggleContent = (value:boolean) :void=>{
        setToggleContent(value)
    }

    let isSelf = false
    useEffect(() => {
        isSelf = username === profile?.userId
        if (username) {
            dispatch(profileAction(username));
        }
    }, [dispatch,username]);

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
                                <h1 className='font-semibold text-sm md:text-md lg:text-xl'>{profile?.user?.name}</h1>
                                <p className='text-sm font-light'>{profile?.title}</p>
                            </div>
                            {isSelf ?
                                <button
                                    className='border-2 border-primary text-sm font-semibold bg-primary text-white md:w-20 lg:w-28 rounded-3xl py-1.5 px-3 my-auto'>Follow
                                </button>
                                :
                                <></>
                            }

                            <button
                                className='border-2 border-black text-sm font-semibold bg-white dark:bg-dark-background dark:border-dark-background dark:text-white text-black md:w-20 lg:w-28 rounded-3xl py-1.5 px-3 my-auto'>Edit
                                Profile
                            </button>
                        </div>
                        <div className='flex justify-around gap-4 text-center my-auto'>
                            <div className='justify-center gap-2'>
                                <div className="flex gap-2">
                                    <Star1 size="20" className="m-auto"/>
                                    <p>Popular</p>
                                </div>
                                <p className='text-sm'>0</p>
                            </div>
                            <div className='justify-center gap-2'>
                                <div className="flex gap-2">
                                    <Activity size="20" className="m-auto"/>
                                    <p>Posts</p>
                                </div>
                                <p className='text-sm'>{profile?.projects?.length}</p>
                            </div>
                            <div className='justify-center gap-2'>
                                <div className="flex gap-2">
                                    <People size="20" className="m-auto"/>
                                    <p>Follower</p>
                                </div>
                                <p className='text-sm'>{profile?.follower?.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-md font-light my-2">
                        <p>{profile?.bio}</p>
                    </div>

                </div>
            </div>
            <div className="w-full flex gap-1 items-center justify-between mb-6">
                <button
                    className="mx-auto p-2 flex flex-col w-full text-black dark:text-white bg-background dark:bg-dark-background" onClick={()=>handleToggleContent(true)}>
                    <Activity size="24" className="m-auto"/>
                    <h1 className="m-auto font-normal text-sm">Posts</h1>
                </button>
                <button className="mx-auto p-2 flex flex-col w-full text-black dark:text-white bg-background dark:bg-dark-background" onClick={()=>handleToggleContent(false)}>
                    <Personalcard size="24" className="m-auto"/>
                    <h1 className="m-auto font-normal text-sm">Details</h1>
                </button>
            </div>
            {toggleContent ? <Post projects = {profile?.projects} /> : <Detail  details={{ education: profile?.education, projects: profile?.projects }}/>}
        </>
    );
};

