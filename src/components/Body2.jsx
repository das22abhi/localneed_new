import React from 'react'
import Phoneview from './Phoneview';
import b2 from '../assets/b2.svg'

function Body2() {
    return (
        <div className='w-full flex justify-center mt-[100px]'>
            <div className='w-[90%] md:min-w-[750px]'>
                <div className='parent-container bg-gradient-to-tr from-slate-200 to-slate-50 rounded-[30px] p-10 flex justify-around flex-col-reverse items-center md:flex-row relative'>
                    <div className='sub-parent-container-1 flex flex-col md:justify-center w-[50%] min-w-[400px] py-[10%] items-center text-center'>
                        <p className='text-[45px] font-extrabold w-[80%] mb-4 leading-[50px]'>Experience products in AR</p>
                        <p className='text-[15px] text-slate-500 w-[60%] font-medium leading-8'>Have you tried Augmented Reality? Stop looking at boring gallaries and start experiencing them.</p>
                    </div>
                    <div className='sub-parent-container-2 w-[30%] min-w-[250px] flex justify-center relative'>
                        <div className='z-[2]'>
                            <Phoneview bgcolor='white'>
                                <div className='w-[200px] flex justify-center flex-col rounded-3xl bg-white'>
                                    <img src={b2} alt="" className='w-[200px] rounded-3xl' />
                                </div>
                            </Phoneview>
                        </div>
                        <div className='absolute h-[300px] w-[300px] bg-[rgba(255,99,72,0.5)] rounded-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]'></div>
                    </div>
                    <div className='absolute h-[60px] w-[60px] rounded-[50%] bottom-[-30px] left-[30%] bg-[rgb(255,120,100)]'></div>
                    <div className='absolute h-[40px] w-[40px] rounded-[50%] top-[100px] right-[40%] bg-[rgb(255,120,100)]'></div>
                    <div className='absolute h-[25px] w-[25px] rounded-[50%] top-[60px] right-[7%] bg-indigo-500'></div>
                    <div className='absolute h-[70px] w-[70px] rounded-[50%] top-[-80px] right-[12%] bg-indigo-500'></div>
                </div>
            </div>
        </div>
    )
}

export default Body2;