import React from 'react'

function UserImg() {
    return (
        <>
            <div className=' w-[80%]  bg-gray-900 shadow-xl rounded-xl flex flex-col  '>

                <div className='w-full p-'>
                    <img className='rounded-xl w-96 opacity-75' src="./src/assets/ai.png" alt="" />
                </div>
                <div className='w-full  flex flex-col justify-center items-center p-4 '>
                    <div>

                        <img className='rounded-full size-32 border-4 relative bottom-16 border-blue-950 hover:shadow-lg hover:shadow-blue-500/50' src="./src/assets/profile-pic.png" alt="" />
                    </div>
                    <div className=' relative right- bottom-8 '>
                        <img className='cursor-pointer hover:shadow-xl hover:shadow-blue-500/30' src="./src/assets/logo.png" alt="" />
                        <span className='text-gray-500 font-semibold text-xl font-sans'>Full Stack Developer</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserImg