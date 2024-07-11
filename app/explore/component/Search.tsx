import React from 'react';
import {SearchNormal1} from "iconsax-react";

const Search = () => {
    return (
        <div className="w-full md:w-96 lg:w-96 relative flex mx-auto p-3 mb-6">
            <input
                type="search"
                className="relative m-0 block flex-auto rounded-2xl border-2 border-solid border-black/20 bg-black/10 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black dark:placeholder:text-white focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput2"
                aria-describedby="button-addon2"/>
            <span
                className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-primary dark:text-white [&>svg]:h-6 [&>svg]:w-6"
                id="button-addon2">
  <SearchNormal1
      size="28"
  />
  </span>
        </div>
    );
};

export default Search;