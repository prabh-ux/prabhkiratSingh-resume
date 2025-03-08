import React from 'react'
import { Link } from 'react-router'
import CardButton from '../components/CardButton'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import mypic from '../images/me.gif';
const Home = () => {

    const logos = [
        // { title: "FACEBOOK", name: "@prabhkirat", icon: <FaFacebookF className='text-xl' />, link: "https://www.facebook.com/", image: "/images/logos/facebook.png" },
        { title: "INSTAGRAM", name: "@i_am_prabhhh", icon: <FaInstagram className='text-xl' />, link: "https://www.instagram.com/i_am_prabhhh?igsh=MWxiNGV0dmJqOHoxYg==", image: "/images/logos/instagram.png" },
        { title: "LINKEDIN", name: "@Prabhkirat Singh", icon: <FaLinkedinIn className='text-xl' />, link: `https://www.linkedin.com/in/prabhkirat-singh19`, image: "/images/logos/LinkedIn2.png" },
        { title: "TWITTER", name: "@prabhkirat_3167", icon: <FaTwitter className='text-xl' />, link: "https://x.com/prabhkirat_3167", image: "/images/logos/twitter.png" },

    ]
    return (
        <div className='  w-full h-full  flex justify-left '>
            <div className='lg:bg-[linear-gradient(180deg,#BC6C25_30%,#BC6C25_30%)] bg-[linear-gradient(180deg,white_30%,#BC6C25_30%)] pb-[4rem] min-h-screen w-full lg:w-[35%]'>

                <div className='   w-fit h-fit  mt-[5rem] ml-auto  lg:ml-[50%] flex flex-col lg:flex-row sm:flex justify-center items-end md:items-center  gap-0 lg:gap-[2rem]  '>


                    <div className='bg-[#DDA15E]  w-fit h-fit flex flex-col items-center gap-[1rem] pt-[2rem] lg:mx-[2rem] shadow-2xl'>
                        <img src={mypic} alt="me" className='bg-[#D9D9D9] h-[6rem] w-[6rem]   lg:h-[8rem] lg:w-[8rem] rounded-full  '/>
                        <div className='flex flex-col gap-[0.5rem] text-center'>
                            <p className='text-2xl text-[#FEFAE0]'>PRABHKIRAT</p>
                            <p className='text-2xl text-[#FEFAE0]'>SINGH</p>
                        </div>
                        <div className='bg-[#606C38] h-[0.2rem] w-[4rem]  '></div>
                        <div className='hidden lg:flex flex-col gap-[0.5rem]  text-center  sm:pb-[4rem]'>
                            <span className='text-[#FEFAE0] text-xl' >UX/UI  DESIGNER</span>
                            <span className='text-[#FEFAE0] text-xl' >FRONTEND WEB DEVLOPER</span>
                        </div> {/* Buttons */}
                        <div className=' flex lg:hidden gap-4 h-[3rem]  '>
                            <div className='bg-[#383f21]  pl-0   py-2 pb-1 m-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                                <Link to={'/resume'} className='  transition-all duration-300 ease-in-out  text-[#FEFAE0]   bg-[#606C38] px-4 py-2 rounded-xl shadow-md'>RESUME</Link>
                            </div>
                            <div className='bg-[#b0b0ac]  pl-0   py-2 pb-1 m-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                                <Link to={'/myprojects'} className=' hover:text-[#7ea64d] transition-all duration-300 ease-in-out text-[#283618] bg-[#FEFAE0] px-4 py-2 rounded-xl shadow-md h-fit'>PROJECTS</Link>
                            </div>
                        </div>
                        <div className=' h-[2rem] px-[4rem] lg:px-[7rem] py-[1.5rem] bg-white flex justify-center items-center gap-[1rem]' >

                            {logos.map((item, index) => {

                                return <div key={index} ><CardButton item={item}></CardButton></div>
                            })}
                        </div>

                    </div>
                    <div className=' text-[#FEFAE0] lg:text-black min-w-[20rem] h-fit flex flex-col items-start gap-4 lg:px-[2rem] p-[2rem] '>

                        {/* Heading */}
                        <p className='text-7xl  font-extrabold text-left'>Hello</p>
                        <p className='text-xl  text-left'>Here's who I am & what I do</p>

                        {/* Buttons */}
                        <div className=' hidden lg:flex gap-4 h-[3rem]  '>
                            <div className='bg-[#383f21]  pl-0   py-2 pb-1 m-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                                <Link to={'/resume'} className='  transition-all duration-300 ease-in-out  text-[#FEFAE0]   bg-[#606C38] px-4 py-2 rounded-xl shadow-md'>RESUME</Link>
                            </div>
                            <div className='bg-[#b0b0ac]  pl-0   py-2 pb-1 m-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                                <Link to={'/myprojects'} className=' hover:text-[#7ea64d] transition-all duration-300 ease-in-out text-[#283618] bg-[#FEFAE0] px-4 py-2 rounded-xl shadow-md h-fit'>PROJECTS</Link>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='  text-xl   w-full  lg:max-w-[30rem] leading-relaxed'>
                            <p>I'm a UI/UX designer and front-end developer who builds clean, user-friendly experiences with React, Redux, Tailwind, and JavaScript.</p>
                            <p>I use Figma to design intuitive layouts, blending creativity with functionality for seamless interactions.</p>
                        </div>
                    </div>


                </div>

{/* <BacktoTopbtn></BacktoTopbtn> */}
            </div>
        </div>
    )
}

export default Home