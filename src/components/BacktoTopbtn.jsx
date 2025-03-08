import React, { useEffect, useState } from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

const BacktoTopbtn = () => {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            setVisibility(window.scrollY > 200);

        };

        window.addEventListener("scroll", handelScroll);
        return () => window.removeEventListener("scroll", handelScroll);

    }, [])


    const scrollOnTop = () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    return (
        <button onClick={scrollOnTop} className={`  transition-opacity duration-200 ${visible ? "opacity-100 " : "opacity-0 "}  bg-[#d6d2b1] fixed bottom-10 right-10 rounded-full text-2xl p-[0.5rem] `}><FaLongArrowAltUp />
        </button>
    )
}

export default BacktoTopbtn