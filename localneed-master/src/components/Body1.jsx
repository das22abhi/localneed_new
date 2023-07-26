import React from 'react'
import Group2 from '../assets/Group 2.png'
import Phoneview from './Phoneview';
import relaxed from '../assets/doodle-5 1.png'
import compressed from '../assets/doodle-4 1.png'

function Body1() {
    return (
        <div className='w-full md:justify-end justify-center flex mt-[100px]' id='about'>
            <div className='w-[90%]'>
                <div className='flex justify-between items-center md:flex-row flex-col parent-container w-full'>
                    <div className='sub-parent-container-1 md:pl-[5%] md:w-[45%] md:min-w-[350px] w-fit'>
                        <Phoneview>
                            <div className='relative py-10  w-[200px] flex justify-center flex-col rounded-3xl bg-indigo-700'>
                                <p className='text-[30px] pl-6 font-bold text-white'>Find Your Gadget</p>
                                <img src={Group2} alt="" className='h-[200px]' />
                                <button className='bg-white p-[10px] m-4 rounded text-indigo-600 font-bold text-[14px]'>Get Started</button>
                                <img src={relaxed} className='absolute h-[70px] bottom-5 left-[250px] rotate-3' alt="" />
                                <img src={compressed} className='absolute h-[70px] top-5 left-[-70px] rotate-[-30deg]' alt="" />
                            </div>
                        </Phoneview>
                    </div>
                    <div className='sub-parent-container-2 w-[50%] min-w-[400px] flex flex-col md:items-start md:text-left text-center items-center py-[10%]'>
                        <p className='text-[15px] font-bold text-indigo-700 mb-4'>Create an account</p>
                        <p className='text-[45px] font-extrabold mb-4 leading-[45px]'>Discover original products</p>
                        <p className='text-[15px] text-slate-500 w-[60%] font-medium leading-7'>There are more than 950 categories updated daily based on the trending websites reviews and user ratings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body1;