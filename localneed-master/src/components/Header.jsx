import headerImage from '../assets/Group 1.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'

function Header() {
  return (
    <div className='w-full flex justify-center mb-10 header' id='home'>
      <div className='w-[90%] flex md:flex-row md:text-left text-center flex-col-reverse justify-between items-center parent-container-1'>
        <div className='md:w-[40%] w-[65%] flex flex-col md:items-start items-center relative sub-parent-container-1'>
          <p className='text-[45px] font-semibold mb-8 md:min-w-[350px]'>
            Shopping App for Gadgets and Gifts
          </p>
          <p className='text-slate-500 mb-9 w-[80%] md:min-w-[270px]'>
            Get 10% off your first order when you spend over ₹200 on every product!
          </p>
          <div className='flex md:w-[300px] md:flex-row w-[150px] flex-col h-[100px] items-center justify-between' id='download'>
            <a href="https://play.google.com/store/apps/details?id=com.localneed"><img src={playstore} className='h-[40px] w-[140px] rounded-md' alt="playstore" /></a>
            <a href="https://apps.apple.com/us/app/localneed/id1659641405"><img src={appstore} className='h-[40px] w-[140px] object-cover rounded-md' alt="appstore" /></a>
          </div>
          <div className='absolute h-[40px] w-[40px] rounded-[50%] bg-pink-400 left-[-90px] bottom-[50px] z-[-1]'></div>
          <div className='absolute h-[70px] w-[70px] rounded-[50%] bg-amber-400 bottom-[-80px] right-24 z-[-1]'></div>
        </div>
        <div className='sub-parent-container-2'>
          <img src={headerImage} alt="" className='md:h-[480px] object-cover h-[350px]' />
        </div>
      </div>
    </div>
  )
}

export default Header;