import React from 'react'
import Phoneview from './Phoneview';
import relaxed from '../assets/doodle-5 1.png'
import compressed from '../assets/doodle-4 1.png'
import searchpage from '../assets/search page design 1.svg'

function Body3() {
  return (
    <div className='w-full md:justify-end justify-center flex mt-[100px]'>
            <div className='w-[90%]'>
                <div className='flex justify-between items-center md:flex-row flex-col parent-container w-full'>
                    <div className='sub-parent-container-1 md:pl-[5%] md:w-[45%] md:min-w-[350px] w-fit'>
                        <Phoneview>
                            <div className='relative w-[200px] flex justify-center flex-col rounded-3xl bg-indigo-700'>
                                <img src={searchpage} alt="" className='w-[200px]' />
                                <img src={relaxed} className='absolute h-[70px] bottom-5 left-[250px] rotate-3' alt="" />
                                <img src={compressed} className='absolute h-[70px] top-5 left-[-70px] rotate-[-30deg]' alt="" />
                            </div>
                        </Phoneview>
                    </div>
                    <div className='sub-parent-container-2 w-[40%] mr-[6%] min-w-[400px] flex flex-col md:items-start md:text-left text-center items-center py-[10%]'>
                        <p className='text-[15px] font-bold text-indigo-700 mb-4'>Original platform</p>
                        <p className='text-[45px] font-extrabold mb-4 leading-[50px]'>Hottest deals around the web</p>
                        <p className='text-[15px] text-slate-500 w-[60%] font-medium leading-7'>Find the perfect gift or everyday goods right at your fingertips</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Body3;