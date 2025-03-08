import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion } from "framer-motion";


const projects = () => {

    const info = [{
        projectName: "GlowBro-Workout & Fitness Website",
        role: "Frontend Developer & UI/UX Designer",
        info: "GlowBro is a fitness tracking web app designed to help users log workouts, track progress, and stay motivated. The app features a clean and responsive UI, built with React, Tailwind CSS, and Redux for smooth state management. It includes an exercise library with GIFs, workout history stored in local storage, and a user-friendly interface designed in Figma. As the Frontend Developer & UI/UX Designer, I focused on creating an intuitive experience, ensuring seamless navigation, and optimizing performance for different devices.",
        link: "https://glowbro.vercel.app/",
        image: ["./images/glowbross1.png", "./images/glowbross2.png", "./images/glowbross3.png", "./images/glowbross4.png", "./images/glowbross5.png"]
    }
    ]


    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const startImageLoop = () => {
        if (intervalRef.current) return;
        let index = 0;
        intervalRef.current = setInterval(() => {
            if (index < info[0].image.length - 1) {
                setCurrentIndex(++index);

            } else {
                clearInterval(intervalRef.current);
                intervalRef.current = null;

            }
        }, 800);


    }
    const stopImageLoop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setCurrentIndex(0);
    }
    return (
        <div className='bg-[#BC6C25]  w-full h-full py-[4rem] flex flex-col gap-[4rem] pr-0 sm:pr-[0rem] sm:p-[4rem]  '>
            <div className='flex flex-row   items-center justify-center gap-[0.5rem]'>
                <div className='bg-[#606C38] h-[20px] w-[20px]'></div>
                <div className='h-fit w-fit'>
                    <span className='text-[#FEFAE0] text-xl font-bold' >PROJECTS</span>
                </div>
            </div>

            {/* experience */}

            <div className=' text-[#FEFAE0] text-center px-[1rem] max-w-[50rem]  self-center text-xl'>

                <p>Hey there! This is where I showcase the projects I’ve worked on, blending frontend development with UI/UX design. Whether it’s a React web app or a clean, user-friendly design made in Figma, each project is built with attention to detail and usability in mind. Take a look around and see what I’ve been creating!</p>

            </div>

            {/* education */}
            <div className='flex sm:flex-col gap-[2rem] justify-center self-end md:self-center '>
                {/* info */}
                {info.map((item, index) => {

                    return <div key={index} className='bg-white w-fit h-fit ml-[4rem] sm:mx-auto  hover:-translate-y-2 transition-transform duration-300 flex flex-col sm:flex-row '>
                        {/* 1st div */}
                        <div className='flex flex-col '>
                            {/* heading */}
                            <div className='h-fit w-fit flex items-center gap-[1rem] pt-[2rem] ' >
                                <div className='bg-[#7D923A] w-[1rem]  h-[4rem]' ></div>
                                <div>
                                    <p className='text-[#7D923A] text-xl font-bold '>{item.projectName}</p>
                                    <p className='text-black text-sm '>{item.role}</p>
                                </div>
                            </div>
                            <div className='m-[1rem] '>


                                <p className='max-w-[25rem] p-[1rem] text-[#525252]'>{item.info}</p>


                                <div className='  flex gap-4 h-[3rem] pl-[1rem]  '>
                                    <div className='bg-[#383f21]  pl-0   py-2 pb-1 mt-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                                        <Link to={item.link} target='_blank' className='  transition-all duration-300 ease-in-out  text-[#FEFAE0]   bg-[#606C38] px-4 py-2 rounded-xl shadow-md'>Try It Yourself</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* 2nd div */}

                        <motion.img
                            key={item.image[currentIndex]}
                            initial={{ opacity: 0.50 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}

                            onMouseEnter={startImageLoop} onMouseLeave={stopImageLoop} className='object-cover transition-opacity duration-500 opacity-100 ' src={item.image[currentIndex]} />



                    </div>
                })}


            </div>


        </div >
    )
}

export default projects