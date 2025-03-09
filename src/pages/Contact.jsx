import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import PasswordPrompt from '../components/PasswordPrompt';


const Contact = () => {
    const notify = () => toast('Here is your toast.');
     const apiKey = process.env.REACT_APP_BREVO_API_KEY;


    const [mailSending, setMailSending] = useState(false);
    
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        setMailSending(true);
       let pass= prompt("🔒 Secret Access Required Only the chosen ones know the pass! (Hint: Prabh told you 😉)");
        if(pass.toLowerCase()==="reena"){
            
            toast.success("🎉 Whoa! You got it! Sending your email to Prabhkirat Singh...");
            handelMail();
        }else{
            toast.error("❌ Uh-oh! Wrong passcode. Are you really in the inner circle? 🤨");
            setMailSending(false);
        }
      
    };
    

    const handelMail = () => {
        fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": {apiKey},  // Replace with your Brevo API key
            },
            body: JSON.stringify({
                sender: { 
                    email: "prabhkiratsinghbusiness@gmail.com",  
                    name: "Website Contact Form" 
                },
                to: [{ 
                    email: "prabhkiratsinghbusiness@gmail.com", 
                    name: "Prabhkirat Singh" 
                }],
                replyTo: {  
                    email: formData.email,  
                    name: `${formData.firstName} ${formData.lastName}` 
                },
                subject: formData.subject,
                htmlContent: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                        <h2>New Message from Contact Form</h2>
                        <p><strong>From:</strong> ${formData.firstName} ${formData.lastName} (<a href="mailto:${formData.email}">${formData.email}</a>)</p>
                        <p><strong>Subject:</strong> ${formData.subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${formData.message}</p>
                    </div>
                `,
            }),
            
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            toast.success("📨 Email sent successfully!");
            setMailSending(false);
        })
        .catch(error => {
            console.error("Error:", error);
            toast.error("⚠️ Email sending failed. Try again!");
            setMailSending(false);
        });
    };
    
    
    
    
    
    

    const handelChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return (

        <div className='bg-[#BC6C25]  w-full h-full py-[4rem] flex flex-col gap-[4rem] pr-0 sm:pr-[0rem] sm:p-[4rem]  '>
            

            <Toaster position="top-right"
                reverseOrder={false} toastOptions={{
                    style: {
                        fontSize: '18px',  // Increase text size
                        padding: '16px',   // Increase padding
                    },
                }} />

            <div className='flex flex-row   items-center justify-center gap-[0.5rem]'>
                <div className='bg-[#606C38] h-[20px] w-[20px]'></div>
                <div className='h-fit w-fit'>
                    <span className='text-[#FEFAE0] text-xl font-bold' >Let's talk</span>
                </div>
            </div>




            <div className='flex sm:flex-col gap-[2rem] justify-center self-end md:self-center '>
                <form onSubmit={handleSubmit} >
                    <div className='bg-white w-fit h-fit ml-[4rem] sm:mx-auto  hover:-translate-y-2 transition-transform duration-300 flex flex-col p-[2rem]  gap-[2rem] '>
                        {/* 1st div */}
                        <div className='flex flex-col sm:flex-row gap-[3rem]'>
                            <div className='  min-w-[15rem] '>
                                <p>First Name</p>
                                <input className='border-b-2 decoration-0 outline-0 w-full ' type="text" name="firstName" required onChange={handelChange} />
                            </div>
                            <div className='  min-w-[15rem] '>
                                <p>Last Name</p>
                                <input className='border-b-2 decoration-0 outline-0 w-full' type="text" name="lastName" required onChange={handelChange} />
                            </div>
                        </div>
                        {/* 2nd div */}

                        <div className='flex gap-[3rem]'>
                            <div className=' w-full sm:min-w-[33rem] '>
                                <p>Email</p>
                                <input className='border-b-2 decoration-0 outline-0 w-full' type="email" name="email" required onChange={handelChange} />
                            </div>

                        </div>

                        {/* 3rd div */}

                        <div className='flex gap-[3rem]'>
                            <div className=' w-full sm:min-w-[33rem] '>
                                <p>Subject</p>
                                <input className='border-b-2 decoration-0 outline-0 w-full' type="text" name="subject" required onChange={handelChange} />
                            </div>

                        </div>

                        {/* 3rd div */}

                        <div className='flex gap-[3rem]'>
                            <div className=' w-full sm:min-w-[33rem] h-full   '>
                                <p>Message</p>
                                <textarea className='border-b-2 decoration-0 outline-0 w-full h-full sm:min-h-[5rem]  ' name="message" required onChange={handelChange} ></textarea>
                            </div>

                        </div>
                        <div className='  flex gap-4 h-[4rem]   '>
                            <button disabled={mailSending} type='submit' className={`bg-[#383f21] ${mailSending ? "cursor-progress" : " cursor-pointer"}  pl-0    mt-auto rounded-xl  hover:pb-2  transition-all ease-in-out duration-300  `}>
                                <div className={`   transition-all duration-300 ease-in-out ${mailSending ? "text-[#c1c0bc] " : " text-[#FEFAE0] "} ${mailSending ? "bg-[#343b1f]" : "bg-[#606C38]"} px-4 py-2 rounded-xl shadow-md `} >SUBMIT</div>
                            </button>

                        </div>

                    </div>
                </form>




            </div>


        </div >
    )
}

export default Contact