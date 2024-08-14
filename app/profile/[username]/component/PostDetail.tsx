import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import {ArrowSquareRight, GalleryAdd, Heart, Messages1, Send} from "iconsax-react";
import {readableTimes} from "@/app/utils/readableTimes";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/store";

interface PostDetailProps {
    isOpen: boolean;
    onClose: () => void;
    project:any;
    comments:any[]
}

const PostDetail: React.FC<PostDetailProps> = ({ isOpen, onClose, project, comments }) => {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [value, setValue] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const { isLoading } = useSelector((state: RootState) => state.ui);
    useEffect(() => {
        adjustHeight();
    }, [value]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match this duration to the transition time
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const adjustHeight = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = 'auto'; // Reset the height to auto
            textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on the scroll height
        }
    };


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === 'modal-overlay') {
            onClose();
        }
    };


    if (!isVisible) return null;

    return (
        <div
            id="modal-overlay"
            className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
            aria-hidden="true"
        >
            <div
                className={`relative border-2 border-black dark:border-white w-full max-w-4xl text-black dark:text-white bg-background dark:bg-dark-background md:rounded-3xl transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'} h-[calc(100vh-2rem)]`}
                aria-hidden="true"
            >
                <div className="flex flex-col h-full">
                    <header className='w-full bg-background dark:bg-dark-background rounded-t-3xl pt-4 pb-2 sticky top-0 z-10'>
                        <div className="flex gap-2 mb-1  px-4">
                            <div className="h-8 w-8 rounded-full bg-white my-auto"></div>
                            {/*<div>*/}
                            {/*    <h1 className="font-semibold text-sm">{project?.userId}</h1>*/}
                            {/*</div>*/}
                            <div>
                                <div className="flex gap-2">
                                    <h1 className="font-normal text-lg">{project?.title}</h1>
                                    <p className="text-xs text-black/70 dark:text-white/50 my-auto">{project?.stack}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Link href={`/profile/${project?.userId}`}
                                          className="text-xs text-black/70 dark:text-white/50 border-black/70 dark:border-white/50 border-r-2 pr-2">{project?.userId}</Link>
                                    <p className="text-xs text-black/70 dark:text-white/50 ">{readableTimes(project?.createdAt)}</p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section className="flex-1 overflow-y-auto py-4">
                        <p className="font-light text-sm px-8">{project?.description}</p>
                        <div className="flex gap-4 text-xs py-3 px-8">
                            <div className="flex gap-1">
                                <Messages1 size="18" /> Comments
                            </div>
                            <div className="flex gap-1">
                                <Heart size="18" /> Likes
                            </div>
                        </div>
                        <div className="w-full dark:bg-black rounded-2xl mb-3">
                            {isLoading ? (
                                <div className="space-y-4 px-4 py-3">
                                    {[...Array(3)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="w-full h-24 bg-dark-background rounded-lg animate-pulse"
                                        ></div>
                                    ))}
                                </div>
                            ) : comments.length === 0 ? (
                                <div className="dark:bg-dark-background text-center py-4">No comment</div>
                            ) : (
                                comments.map(comment => (
                                    <div
                                        key={comment.uuid} // Unique key for each comment
                                        className='w-full bg-black/10 dark:bg-black border-b border-black/20 dark:border-white/20 px-4 py-3'
                                    >
                                        <div className="flex gap-2 mb-1">
                                            <div className="h-8 w-8 rounded-full bg-white"></div>
                                            <div className='my-auto'>
                                                <h1 className="font-normal text-sm">{comment.username}</h1>
                                                <p className="text-xs">{readableTimes(comment.createdAt)}</p>
                                            </div>
                                        </div>
                                        <div className="w-full p-2 text-sm px-10">{comment.comment}</div>
                                    </div>
                                ))
                            )}

                        </div>
                    </section>
                    <footer
                        className="w-full flex p-4 bg-background dark:bg-dark-background sticky bottom-0 rounded-b-3xl">
                        <div className="w-full rounded-2xl text-sm font-light">
                            <div className='w-full flex gap-2 bg-background dark:bg-dark-background rounded-2xl mb-4'>
                                <div
                                    className="w-full h-auto rounded-2xl border-2 border-solid border-black/20 outline-none transition duration-200 ease-in-out dark:border-white/10 dark:text-white">
                                    <div className="flex flex-col justify-between">
                        <textarea
                            ref={textareaRef}
                            value={value}
                            onChange={handleChange}
                            className="w-full overflow-hidden resize-none m-0 block flex-auto rounded-t-2xl bg-background dark:bg-dark-background bg-clip-padding px-3 py-[0.25rem] font-sm text-surface placeholder:text-black dark:placeholder:text-white focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:autofill:shadow-autofill dark:focus:border-primary"
                            placeholder="Add a comment..."
                            aria-label="comment"
                            aria-describedby="button-addon2"
                        />
                                        <div className="w-full rounded-b-2xl flex justify-between z-20 px-4 py-1">
                                            <GalleryAdd size="24"/>
                                            <Send size="24" className="text-primary"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </footer>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white dark:text-black"
                >
                    &times; {/* or you can use an icon for close */}
                </button>
            </div>
        </div>
    );
};

export default PostDetail;
