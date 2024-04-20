import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../Images/logo.png';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-1 ">
      <div className="w-[100%] py-1 px-[3rem] items-center flex justify-between mx-auto  ">
        <div className="p-0"><img src={logo} alt='logo' className='h-20'/></div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li><a href="/">Home</a></li>
          <li><a href="/">Home</a></li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        {/*-------responsive menu------------*/}
        <ul className= {`duration:300 md:hidden w-full h-screen text-white fixed bg-black top-[89px]
         ${ toggle ? 'left-[0]' : 'left-[-100%]' } `} >
          <li className="p-4">Home </li>
          <li className="p-4">About</li>
          <li className="p-4">Services</li>
          <li className="p-4">Portfolio</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
