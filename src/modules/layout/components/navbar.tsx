"use client";

import { MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { GetDate } from '../utils';

const Navbar = () => {
  const [time, setTime] = useState(GetDate());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(GetDate());
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  console.log(time)

  return (
    <div className='w-full min-h-18 border-1 border-[#2C2C2C] flex justify-between items-center text-[#f3f3f3] font-sans px-10'>
      <div className='flex justify-center items-center gap-2'>
        <h2 className='tracking-[-1px] text-[16px] font-medium'>IN</h2>
        <h2 className='text-[16px] font-normal'>{time.hour}:{time.minutes}:{time.second < 10 ? "0" + time.second : time.second}</h2>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <MapPin size={18} className='' />
        <h2 className='tracking-[-1px] text-[16px] font-medium'>Earth, India</h2>
      </div>
    </div>
  )
}

export default Navbar