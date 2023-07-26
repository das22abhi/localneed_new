import React from 'react'
import socials from '../constants/socials';

function Body5() {
    return (
        <div className='w-full justify-center flex mt-[100px] pb-[50px]' id='contactUs'>
            <div className='w-[90%]'>
                <div className='flex flex-col justify-around items-center w-full '>
                    <div className='sub-parent-container-2 relative w-[40%] min-w-[350px] flex justify-center text-center items-center py-[5%]'>
                        <p className='lg:p-0 md:p-[10%] text-[30px] font-extrabold mb-4 leading-[50px]'>Hey! Follow us on social media so you don't miss any offer.</p>
                    </div>
                    <div className='w-[60%] h-[300px] sm:h-fit flex flex-col sm:flex-row justify-around items-center'>
                        {
                            socials.map((item, index) => (
                                <a href={item.href} key={index}>
                                    <img src={item.src} alt={item.name} className=' opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 hover:scale-[1.1]' />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body5;