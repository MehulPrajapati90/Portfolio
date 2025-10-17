import { ChevronUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-[50%] min-h-auto border-1 border-[#2C2C2C] flex justify-center font-sans px-5 py-10'>
            <div className='w-[70%] min-h-auto flex flex-col justify-between gap-15'>
                <div className=''>
                    <h1 className='font-quartens text-[65px] leading-15'>MEHUL . ME</h1>
                    <p className='text-[13px] font-sans text-[#838499] leading-3'>Ya, That’s me Mehul Prajapati.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-[13px] font-sans text-[#838499] leading-3'>Architected in Year <span className='text-white'>2025</span></p>
                    <div className='border border-[#525258] h-10 w-10 rounded-full flex justify-center items-center'>
                        <ChevronUp size={20} className='text-[#525258]' />
                    </div>
                    <p className='text-[13px] tracking-[-0.3px] font-sans font-medium text-red-600 leading-3'>I hold all Rights to this website, probably made with arrogance.</p>
                </div>
            </div>

            <div className='w-[30%] flex flex-col gap-5'>
                <div className='w-full flex justify-end'>
                    <div className='border-1 border-[#2C2C2C]'>
                        <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>Footer.tsx</h3>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <h2 className='text-right w-[40%] text-[#838499]'>If you are here, <span className='text-white'>reading</span> this, probably you <span className='text-white'> owe me :)</span></h2>
                </div>
                <div className='text-white'>
                    <h2 className='text-right text-[14px] font-medium font-sans hover:text-[#838499] transition-all ease-in-out duration-200 cursor-pointer'>mehul.me @ 2025</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer