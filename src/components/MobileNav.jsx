import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsBracesAsterisk } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Outlet, Link, NavLink } from 'react-router-dom'

function MobileNav() {
  return (
    <div className='w-full   max-sm:mt-5 '>
        <nav className=' bg-slate-800 opacity-  rounded-full w-72 m-auto relative   sm:hidden '>
                <ul className='flex justify-evenly'>
                    <li className=' '>
                      
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "text-orange-600 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out " : "text-white bg-white px-  rounded-2xl")}
                        >
                          <AiFillHome className='size-7 ' />
                        </NavLink>

                    </li >
                    <li className=' '>

                        <NavLink
                            to="/Skills"
                            className={({ isActive }) => (isActive ? "text-orange-600  rounded-2xl shadow-xl transition-all duration-700 ease-in-out px-  " : "text-white  rounded-2xl ")}
                        >
                        <BsBracesAsterisk className='size-7' />
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/Project"
                            className={({ isActive }) => (isActive ? "text-orange-600 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out  " : "text-white rounded-2xl ")}
                        >
                        <FaGraduationCap className='size-7' />
                            
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/Connect"
                            className={({ isActive }) => (isActive ? "text-orange-600 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out" : "text-white rounded-2xl  ")}
                        >
                        <RiContactsBook2Fill className='size-7' />
                            
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
    </div>
  )
}

export default MobileNav