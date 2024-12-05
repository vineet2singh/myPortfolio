import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactFormWithOTP from '../components/ContactFormWithOTP'
import MobileNav from '../components/MobileNav'

function Connect() {
  return (
    <div className='w-full h-'>
      {/* <div>
        <img src="./src/assets/codingMan.png" alt="" />
      </div> */}
      <div className=' max-sm:h-screen max-sm:flex  max-sm:flex-col  max-sm:justify-between '>
        <div className='w-full pt-10'>
          <div className='w-full flex justify-center items-center gap-2'>
            <img width="30" height="48" src="https://img.icons8.com/color/48/business-contact.png" alt="business-contact" />
            <h1 className='text-violet-400 text-2xl '>  Contact Us </h1>
          </div>
          <p className='text-white text-lg text-center pt-2 hover:shadow-violet-400 '>"Get in Touch – Let's Create and Collaborate!" </p>

        </div>
        <ContactForm />
        {/* <ContactFormWithOTP/> */}
        <div className='text-center  pt-2 sm:pb-3 '><h1 className='text-violet-400 text-xl text-center border-b-2 border-gray-600 inline-block'>Social Network</h1></div>
        <div className='w- flex justify-center items-center gap-10 mt-  '>
          <a href="http://www.linkedin.com/in/1vineetsingh" target='_blank' className='size- hover:scale-125 ease-in-out duration-200 '><img width="38" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" /></a>

          <a href="http://github.com/vineet2singh" target='_blank' className='size-15  hover:scale-125 ease-in-out duration-200'><img width="50" height="60" src="https://img.icons8.com/plasticine/100/github.png" alt="github" /></a>

          <a href="mailto:vineetsingh1080@gmail.com" target='_blank' className='size-15  hover:scale-125 ease-in-out duration-200'> <img width="40" height="50" src="https://img.icons8.com/fluency/50/email-open.png" alt="email-open" /> </a>

          <a href="http://" target='_blank' className='size-15  hover:scale-125 ease-in-out duration-200'><img width="30" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1" /></a>
        </div>
      </div>
      <div className=' sticky bottom-4 '>
      <MobileNav/>

      </div>
    </div>

  )
}

export default Connect