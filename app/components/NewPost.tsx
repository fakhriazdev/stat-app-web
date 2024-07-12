import React from 'react';
import {AddSquare, ArrowSquareRight, GalleryAdd, Heart, Messages1, Send} from "iconsax-react";

const NewPost = () => {
    return (
        <div className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl mb-6">
            <div className="w-full rounded-2xl text-md font-medium p-4">
                <div className='w-full flex gap-2 bg-background dark:bg-dark-background rounded-2xl mb-4'>
                    <div className="w-full h-auto">
                        <div className="w-full relative rounded-2xl h-28 border-2 border-solid border-black/20 outline-none transition duration-200 ease-in-out dark:border-white/10 dark:text-white">
                            <textarea
                                className="w-full overflow-hidden resize-none m-0 h-auto min-h-16 block flex-auto rounded-t-2xl bg-background dark:bg-dark-background bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface placeholder:text-black dark:placeholder:text-white focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none  dark:autofill:shadow-autofill dark:focus:border-primary"
                                placeholder="Show You the World!"
                                aria-label="Search"
                                id="exampleFormControlInput2"
                                aria-describedby="button-addon2"
                            />
                        <div className="w-full absolute bottom-0 rounded-b-2xl flex justify-between z-20 px-4 py-1">
                            <GalleryAdd
                                size="30"
                            />
                            <Send
                                size="30"
                                className="text-primary"
                            />
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewPost;