import React from 'react';
import {ArrowSquareRight, Heart, Messages1} from "iconsax-react";

const ListPostUsers = () => {
    return (
        <>
            <div className='w-full bg-background dark:bg-dark-background rounded-2xl p-2 mb-4'>
                <div className="flex gap-2 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white"></div>
                    <div>
                        <h1 className="font-semibold text-normal">user1</h1>
                        <p className="text-xs">21.00</p>
                    </div>
                </div>
                <div className="w-full p-2">
                    <div className="text-sm mb-3">Northwestern Medicine and Brigham and Women’s Hospital scientists
                        have discovered a molecular defect that promotes the pathologic immune response in systemic
                        lupus
                        erythematosus (known as lupus) and in a study
                    </div>
                    <div className="flex gap-4 text-xs mb-3">
                        <div className="flex gap-1"><Messages1
                            size="18"
                        />Comments
                        </div>
                        <div className="flex gap-1"><Heart
                            size="18"
                        />Likes
                        </div>

                    </div>
                    <div className="w-full bg-white dark:bg-black rounded-2xl p-2 mb-3">
                        <div className='w-full bg-background dark:bg-dark-background rounded-2xl p-2 mb-2 '>
                            <div className="flex gap-2 mb-3">
                                <div className="h-8 w-8 rounded-full bg-white"></div>
                                <div className='my-auto'>
                                    <h1 className="font-semibold text-sm">user1</h1>
                                    <p className="text-xs">21.00</p>
                                </div>
                            </div>
                            <div className="w-full p-2 text-sm">Good!
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full relative flex">
                            <input
                                type="comment"
                                className="relative m-0 block flex-auto rounded-2xl border-2 border-solid border-black/20 bg-black/10 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black dark:placeholder:text-white focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary"
                                placeholder="Comment"
                                aria-label="Search"
                                id="exampleFormControlInput2"
                                aria-describedby="button-addon2"/>
                            <span
                                className="flex items-center whitespace-nowrap px-3 text-surface dark:border-primary dark:text-white [&>svg]:h-8 [&>svg]:w-8"
                                id="button-addon2">
<ArrowSquareRight
    size="32"
/>
  </span>
                        </div>
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
        </>
    );
};

export default ListPostUsers;