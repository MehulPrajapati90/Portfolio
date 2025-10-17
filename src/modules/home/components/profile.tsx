import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className='w-[50%] min-h-auto font-sans flex justify-start items-center gap-3 py-3 px-5'>
            <div>
                <Image height={20} width={20} src={'/profile.jpg'} alt='profile' unoptimized className='w-[100px] rounded-full'></Image>
            </div>
            <div>
                <h1 className='text-[22px] font-medium tracking-[-1px]'>Mehul Prajapati.</h1>
                <a href='https://x.com/mehulHQ' target='_blank' className='text-[14px] font-medium tracking-[-0.5px] text-[#A0A0B6] hover:text-[#d8d8e8] transition-all ease-in-out duration-200 cursor-pointer'>@mehulHQ</a>
            </div>
        </div>
    )
}

export default Profile;