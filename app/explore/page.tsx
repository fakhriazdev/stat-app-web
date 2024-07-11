import React from 'react';
import Search from "@/app/explore/component/Search";
import ListExplore from "@/app/explore/component/ListExplore";

export default function Page() {
    return (
        <div className="relative justify-center items-center w-full rounded-2xl dark:text-white">
            <Search/>
            <ListExplore/>
        </div>
    );
};

