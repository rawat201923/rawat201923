import React from "react";

export default function Services(){
    return(
        <div className='py-[20px] '  >
            <h1 className='my-8 px-0 text-[#3b82f6] text-center text-3xl font-bold'>SERVICES</h1>
            <div className="mx-w-[1240px]  text-center px-6 mx-auto md:grid grid-cols-4 gap-6">
                <div className="shadow-xl  my-2 hover:scale-105 duration-500">
                    <div className="p-4">
                        <h2 className="p-2 text-[#06b6d4] font-bold">WEB DEVELOPMENT</h2>
                        <hr/>
                        <p className="p-2">Our purpose is client success with creative and sound solutions. Duple aims to safeguard the trust that clients build in us to secure a bond with every company, entrepreneur and thinker.
                        </p>

                    </div>
                </div>
                <div className="shadow-xl my-2 bg-gray-100 hover:scale-105 duration-500">
                <div className="p-4">
                        <h2 className="p-2 text-[#06b6d4] font-bold ">APP DEVELOPMENT</h2>
                        <hr/>
                        <p className="p-2">Our purpose is client success with creative and sound solutions. Duple aims to safeguard the trust that clients build in us to secure a bond with every company, entrepreneur and thinker.
                        </p>

                    </div>
                    </div>
                <div className="shadow-xl    my-2 hover:scale-105 duration-500">
                <div className="p-4">
                        <h2 className="p-2 text-[#06b6d4] font-bold ">GRAPHIC DESIGNING</h2>
                        <hr/>
                         <p className="p-2">Our purpose is client success with creative and sound solutions. Duple aims to safeguard the trust that clients build in us to secure a bond with every company, entrepreneur and thinker.
                        </p>

                    </div>
                </div>
                <div className="shadow-xl   my-2 bg-gray-100 hover:scale-105 duration-500 ">
                <div className="p-4">
                        <h2 className="p-2 text-[#06b6d4] font-bold">DIGITAL MARKETING</h2>
                        <hr/>
                         <p className="p-2">Our purpose is client success with creative and sound solutions. Duple aims to safeguard the trust that clients build in us to secure a bond with every company, entrepreneur and thinker.
                         </p>

                    </div>
                </div>
            </div>
        </div>

    )
}