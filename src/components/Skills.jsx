import React from 'react'
import "./GraphBackground.css"; // CSS file for styling

function Skills() {
  return (
    <div className="graph-container">           {/*--------------Background graph design */}
      <div className="line-chart">
        <svg className="graph-lines">
          <polyline
            // points="0,200 50,150 100,180 150,120 200,100 250,150 300,90 350,110"
            stroke="#8884d8"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className='w-full h-screen  text-white '>

        {/* -------------------------Programing Language skills ---------------- */}
        <div className='pl-10 pt-10'>
          <h1 className='text-yellow-300  text-2xl font-mono inline-block'> <img src="./src/assets/coding.png" className='size-10 inline mr-2' alt="" />Programming Languages</h1>
          <div className='mt- flex gap-3 flex-wrap'>

            <div className=' w-28 h-20 bg-gray-800 hover:shadow-violet-500 shadow-md flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200  '>
              <img className='size-16 bri' src="https://img.icons8.com/color/48/c-programming.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-16 bri' src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-20 bri' src="https://img.icons8.com/3d-fluency/50/java-coffee-cup-logo.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-18 bri' src="https://img.icons8.com/fluency/50/javascript.png" alt="c-programming" />
            </div>

          </div>
        </div>
        {/*-------------- FrontEnd Development Skills --------------*/}
        <div className='pl-10 pt-5'>
          <h1 className='text-yellow-300  text-2xl font-mono inline-block'> <img src="./src/assets/coding.png" className='size-10 inline mr-2' alt="" />FrontEnd Technology</h1>
          <div className='mt- flex gap-3 flex-wrap'>

            <div className=' w-28 h-20 bg-gray-800 hover:shadow-violet-500 shadow-md flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200  '>
              <img className='size-16 bri' src="https://img.icons8.com/color/48/html-5--v1.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-16 bri' src="https://img.icons8.com/color/48/css3.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-20 bri' src="https://img.icons8.com/color/48/tailwind_css.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-20 bri' src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-18 bri' src="https://img.icons8.com/fluency/50/javascript.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img className='size-18 bri' src="https://img.icons8.com/color/48/react-native.png" alt="c-programming" />
            </div>

          </div>
        </div>

        {/*-------------------- Backend Development ------------- */}

        <div className='pl-10 pt-5'>
          <h1 className='text-yellow-300  text-2xl font-mono inline-block'> <img src="./src/assets/coding.png" className='size-10 inline mr-2' alt="" />Backend Technolgy</h1>
          <div className='mt- flex gap-3 flex-wrap'>

            <div className=' w-28 h-20 bg-gray-800 hover:shadow-violet-500 shadow-md flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200  '>
              <img className='size-16 bri' src="https://img.icons8.com/fluency/50/node-js.png" alt="c-programming" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img width="64" height="64" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img width="80" height="60" src="https://img.icons8.com/color/48/mysql-logo.png" alt="mysql-logo" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img width="60" height="48" src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db" />

            </div>
          </div>
        </div>

            {/*------------------ Tools -------------- */}

            <div className='pl-10 pt-5'>
          <h1 className='text-yellow-300  text-2xl font-mono inline-block'> <img src="./src/assets/coding.png" className='size-10 inline mr-2' alt="" />Tools </h1>
          <div className='mt- flex gap-3 flex-wrap'>

            <div className=' w-28 h-20 bg-gray-800 hover:shadow-violet-500 shadow-md flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200  '>
            <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/>
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>
            </div>

            {/* <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img width="80" height="60" src="https://img.icons8.com/color/48/mysql-logo.png" alt="mysql-logo" />
            </div>

            <div className=' w-28 h-20 bg-gray-800 flex justify-center items-center rounded-xl hover:scale-110 ease-in-out duration-200 hover:shadow-violet-500 shadow-md'>
              <img width="60" height="48" src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db" /> */}

            {/* </div> */}
          </div>
        </div>

      </div>
    </div>

  )
}

export default Skills