import React from 'react'
import Typing from './NameTyping'
import Developer from './Developer'
import BlobAnimation from './BlobAnimation'

function Home() {
  return (
    <>
      <div className='w-full h-screen bg-slate-950 '>
        <div className='w-full bg-slate-900   flex'>
          <div className='pt-10 pl-10 w-2/3  '>
            <h1 className='text-slate-400 text-2xl font-bold inline-block'>Wellcome to my Portfolio,</h1> <br />
            <h1 className='text-white text-3xl font-extrabold tracking-wider ml-8 mt-5 inline-block'>Hey I'm <span className='text-orange-600'>Vineet</span></h1> <br />
            <div className='mt-1 text-orange-900 text-lg font-mono font-semibold ml-8 inline-block'>
              <Developer />
            </div>
            {/* Introduction */}
            <p className='text-gray-500  text-lg mt-10'>Hello! I'm Vineet Singh, a passionate and dedicated Full Stack Developer with a strong foundation in building dynamic and responsive web applications. <br /> I bring a blend of technical expertise, creativity, and problem-solving skills to every project I undertake.
              <p className='mt-5 mb-5'>
                With hands-on experience in frontend development using HTML, CSS, Tailwind, JavaScript, and React, I strive to craft intuitive and visually appealing user interfaces. On the backend, my proficiency in Java and server-side programming ensures robust and scalable solutions that meet modern standards.</p>
              Let’s build something extraordinary together!</p>

            <div className='mt-5 w-full flex justify-end pr-10 '>
            <a href="./src/assets/vineet Resume1.pdf" download> 
              <button className='bg-violet-600 p-2 text-white text-xl rounded-full tracking-tight px-4 font-serif font-semiboldbold hover:bg-blue-600'>Download Resume</button>
            </a>
            </div>
          </div>
         

            <BlobAnimation />
        
        </div>
      </div>
    </>
  )
}

export default Home