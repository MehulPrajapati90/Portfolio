import React from 'react'
import Profile from './profile';
import { DownloadCloud, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Footer from './footer';

const Hero = () => {
  return (
    <div className='w-full min-h-full border-1 border-[#2C2C2C] flex flex-col items-center text-[#f3f3f3] font-sans'>
      <Profile />
      <div className='w-[50%] min-h-auto border-1 border-[#2C2C2C] flex flex-col justify-center font-sans p-3'>

        <div className='w-full flex justify-end'>
          <div className='border-1 border-[#2C2C2C]'>
            <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>About.tsx</h3>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center px-10 gap-3 py-5'>
          <h2 className='text-[14px] tracking-[-0.3px] text-[#A0A0B6]'>
            {`I'm `}<span className='text-[#f3f3f3]'>Mehul</span>, a 20yo developer living in Chhattisgarh, India. I love to <span className='text-[#f3f3f3]'>Code</span> and play with (<span className='text-[#f3f3f3]'>Ai</span>) ya I do play with AI.
          </h2>
          <h2 className='text-[14px] font-normal tracking-[-0.3px] text-[#A0A0B6]'>
            {`I'm Obsessed with both `}<span className='text-[#f3f3f3]'>Design</span> & <span className='text-[#f3f3f3]'>Development</span>. So What I mean with <span className='text-[#f3f3f3]'>Obsessed</span> is basically, I love what I do.
          </h2>
          <h2 className='text-[14px] font-normal tracking-[-0.3px] text-[#A0A0B6]'>
            {`I Spend my most of time `}<span className='text-[#f3f3f3]'>Learning</span> & <span className='text-[#f3f3f3]'>Building</span> things or probably doing blunders with Web-3 yes {`I'm actually a `}<span className='text-[#f3f3f3]'>Web 3 guy</span>, But if I have access of time I spend it mostly Dreaming yes I day Dream a Lot.
          </h2>
          <h2 className='text-[14px] font-normal tracking-[-0.3px] text-[#A0A0B6]'>
            {`If I be real: I'm not a guy who loves to be on Instagram rather I chose to `}<span className='text-[#f3f3f3]'>Sleep</span> well, yes sleep is like <span className='text-[#f3f3f3]'>{`Bitcoin's`}</span> for me... & I know What I feel will become realty one day.
          </h2>
        </div>

        <div className='w-full flex justify-between items-center pl-10 gap-10'>
          <div className='h-[1px] w-full bg-[#2C2C2C]'></div>
          <div className='border-1 border-[#2C2C2C]'>
            <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>Connect.tsx</h3>
          </div>
        </div>

        <div className='w-full flex justify-start items-center px-10 gap-[10px] py-3'>
          <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-6 py-2 rounded-[10px]'>
            <div className='h-4 w-4 bg-red-600 rounded-full'></div>
            <h2 className='text-[15px]'>Always Availaible for Work</h2>
            <Twitter size={18} className='text-[#8AB4F8]' />
          </div>

          <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-6 py-2 rounded-[10px]'>
            <DownloadCloud size={18} className='text-[#4f4f55]' />
            <h2 className='text-[15px] font-normal tracking-[0.2px]'>Get Resume</h2>
          </div>
        </div>

        <div className='w-full flex justify-between items-center pl-10 gap-10'>
          <div className='h-[1px] w-full bg-[#2C2C2C]'></div>
          <div className='border-1 border-[#2C2C2C]'>
            <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>Social.tsx</h3>
          </div>
        </div>

        <div className='w-full flex flex-col justify-start items-start px-10 gap-3 py-3'>
          <h2 className='text-[15px] tracking-[-0.1px]'>Find me Digitally on ( Social Media ).</h2>
          <div className='w-full flex justify-center items-center gap-[10px]'>
            <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
              <Twitter size={18} className='text-[#4f4f55]' />
              <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Twitter</h2>
            </div>
            <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
              <Mail size={18} className='text-[#4f4f55]' />
              <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Email</h2>
            </div>
            <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
              <Github size={18} className='text-[#4f4f55]' />
              <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Github</h2>
            </div>
            <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-3 px-5 py-2 rounded-[8px]'>
              <Linkedin size={18} className='text-[#4f4f55]' />
              <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Linkedin</h2>
            </div>
            <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-3 px-5 py-2 rounded-[8px]'>
              <Github size={18} className='text-[#4f4f55]' />
              <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Whatsapp</h2>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-between items-center pl-10 gap-10 pt-4'>
          <div className='h-[1px] w-full bg-[#2C2C2C]'></div>
          <div className='border-1 border-[#2C2C2C]'>
            <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>Skills.tsx</h3>
          </div>
        </div>

        <div className='px-10 min-h-auto'>
          <div className='flex flex-col justify-start items-baseline'>
            <div className='flex justify-start items-baseline gap-2'>
              <h2 className='text-white font-dirty text-[50px] tracking-[0.2px]'>Skills.</h2>
              <h3 className='text-[13px] font-sans text-[#9999A5] tracking-[-0.2px]'>Which i used to build products&nbsp;!</h3>
            </div>
            <h4 className='text-[13.5px] font-sans text-[#9999A5] tracking-[-0.4px] leading-4'>{`These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.`}</h4>

            <div className='min-h-auto w-full flex flex-col justify-center items-center gap-4'>
              <div className='flex flex-col justify-center items-start mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-white font-dirty text-[30px] tracking-[0.5px]'>Languages.</h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Javascript</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Mail size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Typescript</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Python</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Linkedin size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>C++</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Rust</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Solidity</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Html</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Css</h2>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-start mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-white font-dirty text-[30px] tracking-[0.5px]'>FrameWork <span className='text-[#4f4f55]'>&</span> Libraries</h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Javascript</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Mail size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Typescript</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Python</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Linkedin size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>C++</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Rust</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Solidity</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Html</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Github size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Css</h2>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-start mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-white font-dirty text-[30px] tracking-[0.5px]'>Backednd <span className='text-[#4f4f55]'>&</span> Runtime</h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Backend</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Express</h2>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-start mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-white font-dirty text-[30px] tracking-[0.5px]'>Databases <span className='text-[#4f4f55]'>&</span> ORM <span className='text-[#4f4f55]'>&</span> ODM </h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>MongoDB</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Postgres</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Mongoose</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Prisma</h2>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-start mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-white font-dirty text-[30px] tracking-[0.5px]'>{`Developer's Tools`}</h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Git</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Github</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>VSCode</h2>
                  </div>
                  <div className='border border-[#27272A] bg-[#18181B] flex justify-center items-center gap-2 px-5 py-2 rounded-[8px]'>
                    <Twitter size={18} className='text-[#4f4f55]' />
                    <h2 className='text-[15px] font-medium tracking-[-0.3px]'>Postman</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-between items-center pl-10 gap-10 pt-4'>
          <div className='h-[1px] w-full bg-[#2C2C2C]'></div>
          <div className='border-1 border-[#2C2C2C]'>
            <h3 className='text-[16px] font-medium tracking-[-0.5px] text-red-500 px-3 py-1'>Projects.tsx</h3>
          </div>
        </div>

        <div className='px-10 min-h-auto'>
          <div className='flex flex-col justify-start items-baseline'>
            <div className='flex justify-start items-baseline gap-2'>
              <h2 className='text-white font-dirty text-[50px] tracking-[0.2px]'>Projects.</h2>
              <h3 className='text-[13px] font-sans text-[#9999A5] tracking-[-0.2px]'>These are products less projects!</h3>
            </div>
            <h4 className='text-[13.5px] font-sans text-[#9999A5] tracking-[-0.4px] leading-4'>{`These are some projects that I've made during my learning process. This list is constantly evolving as I continue to learn and grow as a developer.`}</h4>

            <div className='min-h-auto w-full flex flex-col justify-center items-center gap-4'>
              <div className='flex flex-col justify-center items-center mt-5 gap-3 w-full min-h-auto'>
                <h2 className='text-zinc-400 font-dirty text-[30px] tracking-[0.5px]'>Soon!</h2>
                <div className='flex flex-wrap justify-start items-center gap-[10px] w-full min-h-auto'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] min-h-auto border-1 border-[#2C2C2C] flex flex-col justify-center font-sans p-3'>
      </div>
      <Footer />
    </div>
  )
}

export default Hero;