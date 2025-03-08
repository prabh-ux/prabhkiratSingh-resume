import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-xl text-gray-700 mt-2">Oops! Page not found.</p>
                <div className=' flex gap-4 h-[3rem]  '>
                    <div className='bg-[#383f21]  pl-0   py-2 pb-1 mt-auto rounded-xl  hover:pb-3  transition-all ease-in-out duration-300  w-fit '>
                        <Link to={'/'} className='  transition-all duration-300 ease-in-out  text-[#FEFAE0]   bg-[#606C38] px-4 py-2 rounded-xl shadow-md'>Go To Home</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NotFound;
