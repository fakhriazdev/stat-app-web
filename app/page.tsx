'use client'
import Profile from "@/app/pages/profile/Page";
import React, {useEffect} from "react";

export default function Home() {
  useEffect( () => {
    (
        async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
        }
    )()
  }, [])

  return (
      <>
         <p>Home</p>
      </>

  );
}
