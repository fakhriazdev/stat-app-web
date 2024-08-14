import React, {useState} from 'react';
import {ArrowSquareRight, Heart, Messages1} from "iconsax-react";
import NewPost from "@/app/components/shared/NewPost";
import Link from "next/link";
import {readableTimes} from "@/app/utils/readableTimes";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/app/lib/store";
import {clearComments, commentsAction} from "@/app/lib/features/commentsSlice";
import PostDetail from "@/app/profile/[username]/component/PostDetail";

interface PostProps {
    projects?: any[];
}
const Post: React.FC<PostProps> = (props) => {
    const {projects} = props
    const dispatch = useDispatch<AppDispatch>();
    const { comments } = useSelector((state: RootState) => state.comment);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (projectId:string) => {
        dispatch(commentsAction(projectId))
        setIsModalOpen(true)
    };
    const closeModal = () => {
        dispatch(clearComments());
        setIsModalOpen(false)
    };
    console.log(comments)

    return (
        <>
            <NewPost/>
            {projects?.length === 0 ? (
                    <div className="w-full h-dvh flex justify-center items-center">
                        <h1 className="text-xl text-black/30 dark:text-white/30">No have Projects</h1>
                    </div>
                ) :
                projects?.map(project=>(
                    <>
                <div className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl mb-6" key={project?.uuid}>
                    <div className="w-full rounded-2xl text-md font-medium">
                        <div className='w-full bg-background dark:bg-dark-background rounded-2xl mb-4'>
                            <div className="flex gap-2 mb-1 px-4 pt-4 pb-2">
                                <div className="h-8 w-8 rounded-full bg-white my-auto"></div>
                                <div>
                                    <div className="flex gap-2">
                                        <h1 className="font-normal text-lg">{project?.title}</h1>
                                        <p className="text-xs text-black/70 dark:text-white/50 my-auto">{project?.stack}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={`/profile/${project?.userId}`} className="text-xs text-black/70 dark:text-white/50 border-black/70 dark:border-white/50 border-r-2 pr-2">{project?.userId}</Link>
                                        <p className="text-xs text-black/70 dark:text-white/50 ">{readableTimes(project?.createdAt)}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full">
                                <div className="px-8">
                                    <p className="font-light">{project?.description}</p>
                                </div>
                                <div className="flex gap-4 text-xs px-4 py-3">
                                    <button className="flex gap-1" onClick={()=>openModal(project.uuid)} ><Messages1
                                        size="18"
                                    />{!isModalOpen ? `See ${project.comments.length} Comments` : 'comment'}
                                    </button>
                                    <div className="flex gap-1"><Heart
                                        size="18"
                                    />Likes
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                        <PostDetail isOpen={isModalOpen} onClose={closeModal} project={project} comments={comments} />
                    </>
                ))
            }

        </>

    );
};

export default Post;