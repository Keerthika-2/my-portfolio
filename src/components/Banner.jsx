import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css" ;
import { useEffect } from "react";


const Banner = () => {
 
   useEffect(() =>{
    AOS.init({
        easing:"ease-out-quart",
        delay:0,
        duration:750
    })
},[])

    return (
        <div  className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center '>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white  '>
                <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Hi I'm<span className='text-fuchsia-500'>  Keerthika</span></h1>
                <p data-aos="fade-left " className="font-semibold uppercase text-[24px]" >I'm Full Stack Web Developer</p><br/>
                <p data-aos="fade-left " className="font-semibold uppercase " >I can create dynamic projects using MERN Stack</p>

                <div className="flex mt-8 gap-2 ">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2 ">
                            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                                <FaLinkedinIn className="text-[28px]" />
                            </a>
                            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                                <FiTwitter className="text-[28px]" />
                            </a>
                            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                                <FaInstagram className="text-[28px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className=" rounded-full border-2 p-1 border-fuchsia-500 img_glow"alt="" />
        </div>


    )
}

export default Banner