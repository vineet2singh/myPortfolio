import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsBracesAsterisk } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import UserImg from './UserImg';
import { Outlet, Link, NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className='bg-slate-800 w-1/4 text-white flex flex-col items-center rounded-r-[8%] '>
                <ul className='flex flex-col  h-screen  text-lg py-4'>
                    <div className='w-full text-center flex justify-center'>                   
                             <UserImg/>
                    </div>

                    <li  className='flex  items-center '>
                    <AiFillHome className='size-7 ' />
                        <NavLink
                            to="/"
                            className={  ({ isActive }) => (isActive ? "text-orange-500 bg-white px-4 py rounded-2xl shadow-xl transition-all duration-700 ease-in-out " : "text-white-500 px-4 rounded-2xl") }
                        >
                            Home   
                        </NavLink>

                    </li >
                    <li className='flex  items-center '>
                    <BsBracesAsterisk className='size-7' />

                        <NavLink
                            to="/Skills"
                            className={({ isActive }) => (isActive ? "text-orange-500 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out px-4  " : "text-white-500 px-4 py rounded-2xl ")}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li className='flex  items-center '>
                    <FaGraduationCap className='size-7'/>
                        <NavLink
                            to="/Project"
                            className={({ isActive }) => (isActive ? "text-orange-500 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out px-4 py " : "text-white-500 px-4 py rounded-2xl ") }
                        >
                            Project
                        </NavLink>
                    </li>
                    <li className='flex  items-center '>
                       <RiContactsBook2Fill className='size-7'/>
                        <NavLink
                            to="/Connect"
                            className={({ isActive }) => (isActive ? "text-orange-500 bg-white rounded-2xl shadow-xl transition-all duration-700 ease-in-out px-4 py- " : "text-white-500 px-4 py- rounded-2xl  ")}
                        >
                            Connect
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar