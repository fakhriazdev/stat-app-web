'use client'
import Page from "@/app/profile/page";
import React, {useEffect} from "react";
import Image from "next/image";

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
 <></>
  );
}
