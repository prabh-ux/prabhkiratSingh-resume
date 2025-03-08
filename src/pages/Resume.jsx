import React from 'react'
import { Link } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';
const Resume = () => {

    const notifyDownlode=()=>{
        
            toast.success(' Downloded Started Successfully!');
        
    }

    return (
        <div className='bg-[#BC6C25]  w-full h-full py-[4rem] flex flex-col gap-[4rem] pr-0 sm:pr-[0rem] sm:p-[4rem]  '>
           <Toaster  position="top-right"
            reverseOrder={false}   toastOptions={{
              style: {
                fontSize: '18px',  // Increase text size
                padding: '16px',   // Increase padding
              },
            }} />
            <div className='flex flex-row   items-center justify-center gap-[0.5rem]'>
                <div className='bg-[#606C38] h-[20px] w-[20px]'></div>
                <div className='h-fit w-fit'>
                    <span className='text-[#FEFAE0] text-xl font-bold' >RESUME</span>
                </div>
            </div>

            {/* experience */}

            <div className=' flex flex-col gap-[2rem] justify-center self-end md:self-center'>

                {/* button and topic */}
                <div className='flex justify-around items-center max-h-[2rem] '>
                    <div>
                        <p className='text-[#FEFAE0] text-xl font-bold'>Experience</p>
                    </div>
                    <div className='bg-[#383f21]  pl-0   py-2 pb-1  rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  '>
                        <a onClick={notifyDownlode} href="/PrabhkiratSingh.pdf" download="prabhkirat_singh(Frontend Devloper) CV resume" className='  transition-all duration-300 ease-in-out  text-[#FEFAE0]   bg-[#606C38] px-4 py-2 rounded-xl shadow-md'>Downlode CV</a>
                    </div>
                </div>
                {/* info */}
                <div className='bg-white w-fit h-fit ml-[2rem] sm:ml-[1rem] sm:mx-auto p-[1rem]  sm:p-[4rem]  hover:-translate-y-2 transition-transform duration-300  '>
                    <p className='text-[#7D923A] text-xl font-bold'>2024-Present</p>
                    <div className='p-[1rem] sm:p-[2rem]'>
                        <p className=' text-lg sm:text-xl'>Frontend Developer & UI/UX Designer (Freelance & Personal Projects)</p>
                        <ul className='list-disc p-[1rem] sm:p-[2rem] text-md sm:text-lg flex flex-col gap-[0.5rem]'>
                            <li>Built modern, responsive websites using HTML, CSS, JavaScript, and React.</li>
                            <li>Styled applications with Tailwind CSS for a clean and efficient UI.</li>
                            <li>Managed state using Redux and handled navigation with React Router DOM.</li>
                            <li>Designed user-friendly interfaces and interactive prototypes in Figma.</li>
                            <li>Focused on user experience (UX) design, making sure websites are easy to navigate.</li>
                            <li>Optimized website speed and ensured everything looks great on different devices.</li>
                            <li>Worked on real-world projects, applying both design and development skills.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* education */}
            <div className='flex flex-col gap-[2rem] justify-center self-end md:self-center '>

                {/* button and topic */}
                <div className='flex justify-around items-center max-h-[2rem] '>
                    <div>
                        <p className='text-[#FEFAE0] text-xl  font-bold'>Education</p>
                    </div>
                    <div className='  pl-0 px-32  py-2 pb-1   '>
                        <div  className=' text-[#BC6C25] hidden  bg-[#BC6C25] px-4 py-2 rounded-xl'>Downlode CV</div>
                    </div>
                </div>
                {/* info */}
                <div className='bg-white w-fit h-fit ml-[4rem] sm:mx-auto p-[1rem]  sm:p-[4rem] hover:-translate-y-2 transition-transform duration-300 '>
                    <p className='text-[#7D923A] text-xl font-bold pb-[1rem]'>2023-Present</p>
                    <div >
                        <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>
                            <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                <p className=' text-sm sm:text-lg'>Sri Guru Gobind Singh College</p>
                                <div className='flex  gap-[8rem] sm:gap-[12rem] '>
                                    <p className=' text-sm sm:text-lg  text-[#525252]'>Bachelor of Computer Applications (BCA)</p>
                                    <p className=' text-sm sm:text-lg  text-[#000000]'>2nd Year | 4th Semester (Ongoing)</p>
                                </div>
                            </div>

                            <p className=' text-sm sm:text-lg text-[#494848] mt-[1rem]'>Chandigarh</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* SkillSet */}
            <div className='flex flex-col gap-[2rem] justify-center self-end md:self-center '>

             
                {/* info */}
                <div className='bg-white w-fit h-fit ml-[4rem] sm:mx-auto p-[1rem]  sm:p-[2rem] px-[1rem]  sm:px-[3rem] hover:-translate-y-2 transition-transform duration-300 '>
                    <p className='text-black text-xl font-bold pb-[1rem]'>Professional skillset</p>
                    <div className='flex flex-col gap-[2rem]'>
                        {/* div1 */}
                        <div className='flex gap-[4rem] sm:gap-[19rem] ' >

                            {/* skillset1 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>Frontend Development</p>

                                    </div>

                                    <ul className='list-disc flex flex-col text-[#525252] p-[1rem] text-xs sm:text-sm  '>
                                        <li >HTML, CSS, JavaScript</li>
                                        <li >React.js, Tailwind CSS</li>
                                        <li >Responsive Design & Optimization</li>
                                        <li >Cross-Browser Compatibility</li>


                                    </ul>

                                </div>


                            </div>
                            {/* skillset2 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0 '>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>State Management & Routing</p>

                                    </div>

                                    <ul className='list-disc flex flex-col  text-[#525252] p-[1rem] text-xs sm:text-sm '>
                                        <li >Redux</li>
                                        <li >React Router DOM</li>



                                    </ul>

                                </div>


                            </div>


                        </div>

                        {/* div2 */}
                        <div className='flex gap-[4rem] sm:gap-[19rem]' >

                            {/* skillset3 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'> UI/UX Design</p>

                                    </div>

                                    <ul className='list-disc flex flex-col text-[#525252] p-[1rem] text-xs sm:text-sm  '>
                                        <li >Figma (Wireframing, Prototyping)</li>
                                        <li > UX &  UI Design</li>
                                    </ul>

                                </div>


                            </div>
                            {/* skillset4 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>Tools & Workflow</p>

                                    </div>

                                    <ul className='list-disc flex flex-col  text-[#525252] p-[1rem] text-xs sm:text-sm  '>
                                        <li >Git & GitHub</li>
                                        <li >Debugging & Problem-Solving</li>
                                        <li >Version Control</li>



                                    </ul>

                                </div>


                            </div>


                        </div>
                    </div>



                </div>
            </div>


            {/* Language */}
            <div className='flex flex-col gap-[2rem] justify-center self-end md:self-center '>


                {/* info */}
                <div className='bg-white w-fit h-fit ml-[4rem] sm:mx-auto p-[1rem]  sm:p-[2rem] px-[1rem]  sm:px-[3rem] hover:-translate-y-2 transition-transform duration-300 '>
                    <p className='text-black text-xl font-bold pb-[1rem]'>Languages</p>
                    <div className='flex flex-col gap-[2rem]'>
                        {/* div1 */}
                        <div className='flex gap-[4rem] md:gap-[29rem] ' >

                            {/* skillset1 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>Punjabi(native)</p>

                                    </div>
                                </div>


                            </div>
                            {/* skillset2 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0 '>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>English (proficient)</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* div2 */}
                        <div className='flex gap-[4rem] sm:gap-[19rem]' >

                            {/* skillset3 */}
                            <div className='  text-md sm:text-lg flex flex-col gap-[0.5rem]'>

                                <div className='flex flex-col gap-[1rem] sm:gap-0'>
                                    <div className='flex gap-[0.5rem] items-center'>
                                        <div className='bg-[#606C38] h-[0.8rem] w-[0.8rem]' ></div>
                                        <p className=' text-sm sm:text-lg'>Hindi (proficient)</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default Resume