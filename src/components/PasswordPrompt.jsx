import React, { useRef, useState } from 'react'

const PasswordPrompt = ({isOpen,setIsOpen}) => {
   
    const cardRef = useRef();
    return (
        <div >
            {isOpen && <div  ref={cardRef} onClick={(e) => { if (e.currentTarget === e.target) { setIsOpen(false); setisHovering(false) } }} className='bg-black/50  inset-0 fixed h-full w-full flex justify-center items-center '>
                
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-xl font-bold mb-2">🔒 Secret Access Required</h2>
                        <p className="mb-4">Only the chosen ones know the pass! (Hint: Prabh told you 😉)</p>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter the magic word..."
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mt-4 flex justify-center space-x-3">
                            <button
                                
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold"
                            >
                                Submit ✅
                            </button>
                            <button
                                
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold"
                            >
                                Cancel ❌
                            </button>
                        </div>
                    </div>
                
                
                
                
                </div>}
            </div>
  )
}

            export default PasswordPrompt