import React from 'react';
import img1 from '../Images/c.png';

export default function Exports(){
    return(
      
        <div className='max-w-[100%] my-3 p-2 text-center mx-4 md:grid grid-cols-2 '>
            
            <div className='col-span-1 md:w-[80%] w-[70%] justify-items'>
                <img src={img1} alt='img' className='inline '/>
            </div>
            <div className=' col-span-1 flex flex-col justify-center'>
                <h1 className='my-2 text-[#3b82f6] text-[20px] md:text-[30px] font-bold'>LEARN FROM OUR EXPERTS</h1>
                <p className='my-2 md:text-xl text-justify '>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

                </p>
                <button className='w-[30%] bg-[#06b6d4] text-white p-3 rounded hover:scale-105 bg-color[black] duration-500'>Read More</button>
            </div>
        </div>
    )
}