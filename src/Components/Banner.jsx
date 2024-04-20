import React from "react";
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 ... w-full py-[100px] '>
      <div className=' my-100 mx-auto font-bold text-center  mt-4 '>
        <div className='text-xl md:text-3xl md:p-[24px]'>
            Welcome To Our Company</div>
        <span className='text-white text-3xl md:text-[40px] md:p-[24px] '>
          Connect with us to grow  
        </span><br/>
        <span className='text-white text-3xl md:text-[40px] md:p-[24px] '>
            your digital presence in the world
        </span>
        <div className='text-xl md:text-2xl md:p-[24px]'>
            Learn
            <Typed className="pl-3"
                    strings={['Web development','Digital Marketing','App devlelopment']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={100}

                />    {/*-------typescript------------*/}

        </div>
        <button className='bg-[black] text-white p-3 rounded'>Read More</button>
      </div>
    </div>

    
  );
}
