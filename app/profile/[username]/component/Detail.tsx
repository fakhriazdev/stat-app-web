import React from 'react';

interface PostProps {
    details?: {
        education: null | [];
        projects: null | [];
    };
}
const Detail: React.FC<PostProps> = (props) => {
    const {details} = props
    console.log(details)
    return (
        <>
            <div className="w-full text-black dark:text-white bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                <div className="w-full rounded-2xl text-md font-medium">
                    <h1 className="mb-2">Educations</h1>
                    {details?.education?.length === 0 ?
                        <h1 className="text-center mb-2 text-black/30 dark:text-white/30">No have Educations</h1>
                        :
                        <div className="flex flex-wrap flex-row gap-2 text-xs">
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                        </div>
                    }

                </div>

            </div>
            <div className="w-full bg-background dark:bg-dark-background rounded-3xl p-4 mb-6">
                <div className="w-full rounded-2xl text-md font-medium">
                    <h1 className="mb-2">Skills</h1>
                    {details?.projects?.length === 0 ?
                        <h1 className="text-center mb-2 text-black/30 dark:text-white/30">No have Skills</h1>
                        :
                        <div className="flex flex-wrap flex-row gap-2 text-xs">
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">AI</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Figma</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Photoshop</div>
                            <div className="bg-white dark:bg-black py-2 px-3 rounded-full">Color theory</div>
                        </div>
                    }
                </div>

            </div>

        </>
    );
};

export default Detail;