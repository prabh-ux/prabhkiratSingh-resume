import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className=" h-fit flex z-[10] justify-between p-[2rem] px-[1em] lg:px-[2rem]   sticky top-0 bg-white ">
            {/* Name and proffesion */}
            <div className='flex flex-row  items-center gap-[0.5rem]  '>
                <div className='bg-[#606C38] h-[20px] w-[20px]'></div>
                <Link to="/" className='h-fit w-fit'>
                    <span className='text-black text-xl font-bold' >Prabhkirat Singh</span>
                    <span className=' hover:underline underline-offset-4 decoration-2 transition-all ease-in-out duration-300  text-black text-sm' >/DESIGNER & DEVLOPER</span>

                </Link>
            </div>

            {/* navmenu*/}
            {menuActive&&
            <div className='bg-[#BC6C25] inset-0 fixed flex justify-center items-center w-full h-full '>
            <div className='flex flex-col text-center gap-[2rem]'>
                <NavLink to='/' onClick={()=>setMenuActive(false)} className={({isActive})=>`${isActive?"text-[#FEFAE0]":"text-[#283618]"}  font-bold text-3xl`} >About Me</NavLink>
                <NavLink to='/resume' onClick={()=>setMenuActive(false)} className={({isActive})=>`${isActive?"text-[#FEFAE0]":"text-[#283618]"}  font-bold text-3xl`} >Resume</NavLink>
                <NavLink to='/myprojects' onClick={()=>setMenuActive(false)} className={({isActive})=>`${isActive?"text-[#FEFAE0]":"text-[#283618]"}  font-bold text-3xl`} >Projects</NavLink>
                <NavLink to='/mycontact' onClick={()=>setMenuActive(false)} className={({isActive})=>`${isActive?"text-[#FEFAE0]":"text-[#283618]"}  font-bold text-3xl`} >Contacts</NavLink>
            </div>
        </div>}
            

            {/* navmenubutton*/}

            <NavLink onClick={() => setMenuActive((prev)=>!prev)}  className='cursor-pointer  hover:text-[#5C8D23] transition-all ease-in-out duration-300 flex lg:hidden pl-[1rem] pt-2 '>
                <div className=' flex flex-col gap-[0.3rem] ' >
                    <div className={` h-[0.2rem] transition-transform duration-300   ${menuActive ? "absolute w-[2rem] rotate-45 bg-[#FEFAE0] " : "w-[1.2rem] bg-black"}   `}></div>
                    <div className={` h-[0.2rem] w-[2rem] transition-transform duration-300  ${menuActive ? "-rotate-45 bg-[#FEFAE0]" : "bg-black"} `}></div>
                    <div className={`bg-black h-[0.2rem] w-[1.2rem] transition-transform duration-300 self-end ${menuActive ? "hidden" : "flex"} `}></div>

                </div>
            </NavLink>

            {/* navbuttons */}

            <div className='text-black text-xl hidden lg:flex   gap-[1rem] md:gap-[2rem]  '>
                <NavLink to='/' className='cursor-pointer  hover:text-[#5C8D23] transition-all ease-in-out duration-300'>About Me</NavLink>
                <NavLink to='/resume' className='cursor-pointer hover:text-[#5C8D23] transition-all ease-in-out duration-300'>Resume</NavLink>
                <NavLink to={'/myprojects'} className='cursor-pointer hover:text-[#5C8D23] transition-all ease-in-out duration-300'>Projects</NavLink>
                <NavLink to={'/mycontact'} className='cursor-pointer hover:text-[#5C8D23] transition-all ease-in-out duration-300'>Contacts</NavLink>
            </div>

        </div>
    )
}

export default Navbar