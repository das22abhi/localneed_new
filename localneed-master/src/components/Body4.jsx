import React from 'react'
import Phoneview from './Phoneview';
import b4 from '../assets/b4.svg'
import handleClick from '../functions/handleclick'


function Body4() {

    return (
        <div className='w-full flex justify-center mt-[100px]'>
            <div className='w-[90%] md:min-w-[750px]'>
                <div className='parent-container bg-gradient-to-r from-[#FAB8C4] to-[#fab8c4a1] rounded-[30px] p-10 flex justify-around flex-col-reverse items-center md:flex-row relative'>
                    <div className='sub-parent-container-1 flex flex-col md:justify-center md:text-left w-[50%] min-w-[400px] py-[10%] items-center text-center'>
                        <p className='text-[30px] font-extrabold w-[80%] mb-4 leading-[45px] text-indigo-600'>Save time & money with exclusive offers from top stores</p>
                        <div className='w-[80%]'>
                            <a href="#home" onClick={(e)=>handleClick(e,'#home')}><button className='bg-indigo-800 p-2 px-3 w-[80%] rounded-md text-white mt-3 font-semibold'>Download App</button></a>
                        </div>
                    </div>
                    <div className='sub-parent-container-2 w-[30%] min-w-[250px] flex justify-center relative'>
                        <div className='z-[2]'>
                            <Phoneview bgcolor='white'>
                                <div className='w-[200px] flex justify-center flex-col rounded-3xl bg-white overflow-hidden'>
                                    <img src={b4} alt="" />
                                </div>
                            </Phoneview>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body4;