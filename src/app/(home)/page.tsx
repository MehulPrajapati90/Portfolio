"use client";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from '@/modules/home/components/hero'
import React, { useEffect } from 'react'

const Home = () => {
  return (
    <div className='pt-5 w-full'>
      <Hero />
    </div>
  )
}

export default Home