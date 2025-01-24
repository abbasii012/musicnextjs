import React from 'react'
import { cn } from "@/utils/cn";
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import {Button} from './ui/moving-border'

function HeroSection() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      Master the art of music
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
      "Master the art of music" is about unlocking creativity and expression through sound. It involves learning techniques, understanding theory, and channeling emotions into melodies. 
      </p>

      <Link className="flex justify-center items-center mt-6"
      href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link>
    </div>
  </div>
  )
}

export default HeroSection