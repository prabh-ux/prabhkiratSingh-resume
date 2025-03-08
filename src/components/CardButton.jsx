import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Correct import
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiBroadsword } from "react-icons/gi";
import { motion } from "framer-motion";
import mypic from '../images/me.gif';

const CardButton = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setisHovering] = useState(false);
    const cardRef = useRef();

    return (
        <div >
            {isOpen && <div ref={cardRef} onClick={(e) => { if (e.currentTarget === e.target) { setIsOpen(false); setisHovering(false) } }} className='bg-black/50  inset-0 fixed h-full w-full flex justify-center items-center '>
                <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className='bg-white/30 backdrop-blur-xl w-fit h-fit m-auto flex justify-center items-center flex-col text-center gap-[0.5rem] p-[1rem] rounded-2xl'>
                    <div className='w-full flex justify-evenly items-center gap-[1rem]'>
                        {item.icon}
                        <p>{item.title}</p>

                        <div onClick={() => { setIsOpen(false); setisHovering(false) }} onMouseLeave={() => setisHovering(false)} onMouseEnter={() => setisHovering(true)} className={`flex relative cursor-pointer `}>
                            <GiBroadsword className={`absolute transition-transform ${isHovering ? "rotate-12" : ""} `} />
                            <GiBroadsword className={` transition-transform  scale-x-[-1]`} />
                        </div>

                    </div>

                    <img src={mypic} className='bg-[#D9D9D9]   h-[5rem] w-[5rem] rounded-full '/>
                    <p>Prabhkirat Singh</p>
                    <div>
                        <Link to={item.link} className='text-gray-800 '>{item.name}</Link>
                        <p>UI/UX Designer</p>
                        <p>Frontend Devloper</p>
                    </div>
                    <Link to={item.link} className='bg-amber-300 px-[1rem] py-[0.1rem]  rounded-lg'>Visit Profile</Link>
                    <div className='text-center w-full ' >
                        <div className='flex justify-center items-center gap-[0.5rem]'>
                            <MdOutlineMail />
                            <p>prabhkiratsinghbusiness@gmail.com</p>
                        </div>

                        <div className='flex justify-center items-center  gap-[0.5rem]'>
                            <FaEarthAmericas />
                            <Link>www.mywebsite.com</Link>
                        </div>
                    </div>
                </motion.div>


            </div>}

            <div className='flex gap-[1rem] w-[2rem]  '>
            <Link className=' border-[#475029] border-b-[0.2rem] border-r-[0.3rem]  hover:border-b-[0.1rem] hover:border-r-[0.1rem] hover:border-l-[0.3rem] hover:border-t-[0.3rem] transition-all ease-in-out duration-100 ' onClick={() => setIsOpen(true)}>
                <img  src={item.image} alt="Profile" />
            </Link>


        </div >
        </div >
    );
};

export default CardButton;
