import React from 'react';
import {ArrowSquareRight, Heart, Messages1, People, SearchNormal1, Share} from "iconsax-react";
import Image from "next/image";

const ListExplore = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">

            <div
                className='relative justify-center items-center w-full rounded-tl-2xl rounded-tr-2xl bg-black h-80 text-white'>
                <Image
                    src="/background.jpeg"
                    width={500}
                    height={500}
                    alt="background stat"
                    className="flex flex-col justify-center items-center w-full rounded-2xl h-72 text-black object-cover"/>
                <div className="w-full absolute backdrop-blur rounded-b-2xl bottom-0 bg-black/20 p-2">
                    <div className="flex justify-between mb-2">
                        <div className="flex gap-2">
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                            <div className="my-auto">
                                <h1 className="font-semibold text-sm">Fakhriaz</h1>
                                <p className="text-xs">Programmer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 my-auto">
                            <button
                                className='border-2 border-primary text-sm bg-primary text-white md:w-14 lg:w-14 rounded-3xl py-1 px-2 my-auto'>Follow
                            </button>
                            <button
                                className='border-2 border-black text-sm bg-black text-white md:w-10 lg:w-10 rounded-3xl py-1 px-2 my-auto'>
                                Profile
                            </button>
                        </div>
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
                    <div className="w-full text-sm font-light my-2">
                        <p>Passionate designer creating visually stunning and functional designs. #Designer
                            #Creativity #Innovation</p>
                    </div>

                </div>
            </div>
            <div className='w-full bg-background dark:bg-dark-background rounded-2xl p-2 mb-4'>
                <div className="flex gap-2 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white"></div>
                    <div>
                        <h1 className="font-semibold text-normal">user1</h1>
                        <p className="text-xs">21.00</p>
                    </div>
                </div>
                <div className="w-full p-2 text-sm">Northwestern Medicine and Brigham and Women’s Hospital scientists
                    have discovered a molecular defect that promotes the pathologic immune response in systemic lupus
                    erythematosus (known as lupus) and in a study
                </div>
            </div>
            <div className='w-full bg-background dark:bg-dark-background rounded-2xl p-2 mb-4'>
                <div className="flex gap-2 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white"></div>
                    <div>
                        <h1 className="font-semibold text-normal">user1</h1>
                        <p className="text-xs">21.00</p>
                    </div>
                </div>
                <div className="w-full p-2 text-sm">Northwestern Medicine and Brigham and Women’s Hospital scientists
                    have discovered a molecular defect that promotes the pathologic immune response in systemic lupus
                    erythematosus (known as lupus) and in a study
                </div>
            </div>
        </div>

    );
};

export default ListExplore;