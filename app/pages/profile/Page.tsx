import React from 'react';
import Image from "next/image";

const Profile = () => {

    return (
        <>
                    <div className='w-9/12 rounded-3xl bg-white dark:bg-dark-black p-2'>
                    <div className='relative justify-center items-center w-full rounded-2xl bg-black h-96 text-white mb-6'>
                        <Image
                            src="/background.jpeg"
                            width={1000}
                            height={1000}
                            alt="background stat"
                            className="flex flex-col justify-center items-center w-full rounded-2xl h-80 text-black object-cover"/>
                        <div className="w-full absolute backdrop-blur rounded-b-2xl bottom-0 bg-black/20 py-3 px-4">
                            <div className="flex sm:flex-row md:flex-row flex-col justify-between mb-4 gap-2">
                                <div className='flex gap-2'>
                                    <div className="w-10 h-10 lg:w-24 lg:h-24 rounded-full bg-white my-auto"></div>
                                    <div className='flex justify-center flex-col'>
                                        <h1 className='font-semibold text-sm md:text-md lg:text-xl'>Schachi an</h1>
                                        <p className='text-sm font-light'>Illustrator</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 lg:gap-4 text-center'>
                                    <button
                                        className='border-2 border-primary text-sm font-semibold bg-primary text-white md:w-20 lg:w-28 rounded-2xl py-1 my-auto'>Follow
                                    </button>
                                    <div className='flex justify-center gap-4 flex-col'>
                                        <h1 className='text-sm font-semibold'>Li</h1>
                                        <p className='text-sm font-semibold'>500</p>
                                    </div>
                                    <div className='flex justify-center gap-4 flex-col'>
                                        <h1 className='text-sm font-semibold'>Fo</h1>
                                        <p className='text-sm font-semibold'>20</p>
                                    </div>
                                    <div className='flex justify-center gap-4 flex-col'>
                                        <h1 className='text-sm font-semibold'>Sh</h1>
                                        <p className='text-sm font-semibold'>20</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-sm font-light my-2">
                                <p>Passionate designer creating visually stunning and functional designs. #Designer
                                    #Creativity #Innovation</p>
                            </div>

                        </div>
                    </div>
                    <div
                        className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                        <div className="w-full rounded-2xl text-md font-medium">
                            <h1 className="mb-2">Skills</h1>
                            <div className="flex flex-wrap flex-row gap-2 text-xs">
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">AI</div>
                                <div className="bg-black py-2 px-3 rounded-full">Figma</div>
                                <div className="bg-black py-2 px-3 rounded-full">Photoshop</div>
                                <div className="bg-black py-2 px-3 rounded-full">Color theory</div>
                            </div>
                        </div>

                    </div>
                    </div>


        </>
    );
};

export default Profile;