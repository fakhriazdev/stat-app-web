'use client'
import React, {useEffect} from "react";
import Search from "@/app/explore/component/Search";
import ListPostUsers from "@/app/components/home/ListPostUsers";

export default function Profile() {
  useEffect( () => {
    (
        async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
        }
    )()
  }, [])

  return (
      <div className="relative justify-center items-center w-full rounded-2xl dark:text-white">
          <ListPostUsers/>
      </div>
  );
}
