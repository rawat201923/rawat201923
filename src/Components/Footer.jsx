import React from "react";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook } from "react-icons/sl";


export default function Footer() {
    return (
        <div className="pt-[10px] bg-[#102951] text-[white]">
            <div className="mx-w-[1240] pb-[10px]   px-8 mx-auto md:grid grid-cols-4 gap-6 ">
                <div className="py-2">
                    <h3 className="text-xl font-semibold ">W3Schools Tech</h3>
                    <div className='py-2'>
                        <p>Address: xyz  street, ABC city.</p>
                        <p>Email: info@gmail.com </p>
                        <p>Phone no:+91-0000000000</p>

                    </div>
                </div>
                <div className="py-2">
                    <h3 className="text-xl font-semibold ">Quick Links</h3>
                    <div className="py-2">
                        <ul >
                            <li className="p-1 hover:scale-105 duration-500" ><a href="Experts.jsx">Home</a></li>
                            <li className="p-1" >About</li>
                            
                            <li className="p-1">Portfolio</li>
                            <li className="p-1">Contact</li>
                        </ul>

                    </div>
                </div>
                <div className="py-2">
                    <h3 className=" text-xl font-semibold ">Services</h3>
                    <div className="py-2">
                        <ul >
                            <li className="p-1" >Web Development</li>
                            <li className="p-1" >App Development</li>
                            <li className="p-1" >Graphic Designing</li>
                            <li className="p-1">Digital Marketing</li>
                            
                        </ul>

                    </div>
                </div>
                <div className="py-2">
                    <h3 className=" text-xl font-semibold ">Social Sites</h3>
                    <div className="py-2  flex flex-cols-4">
                        <div className="p-2 px-4"><SlSocialInstagram/></div>
                        <div className="p-2 px-4"><SlSocialLinkedin/></div>
                        <div className="p-2 px-4"><SlSocialTwitter/></div>
                        <div className="p-2 px-4"><SlSocialFacebook/></div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="mx-w-[1240] bg-[#12528a] px-6 mx-auto text-white">

               <p className="p-2 text-center">All rights are reversed by W3schools Tech.</p> 
                

            </div>

        </div>

    )
}