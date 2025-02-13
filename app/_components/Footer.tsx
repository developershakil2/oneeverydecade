'use client'
import Logo from './logo.png'
import ReuseImage from './ReuseImage';
import Tw  from '../images/tw.png'
import Tel from '../images/tel.png'
import Facebook from '../images/facebook.png'
import Insta from '../images/insta.png'
import Dis from '../images/dis.png'


const Footer = ()=>{




    return(
        <>
       

          <div className="flex mb-5 mt-10 w-full  border-t-1 border-[#ffff] justify-center items-center">
              <div >
              <div className="icon_group_nav w-full  gap-5 md:mt-0 flex items-center justify-center">
                             <a href="https://t.me/" className="rounded-full ">
                             <ReuseImage height={20} width={20} src={Tel} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>

                             </a>

                             <a href="https://x.com" className="rounded-full ">
                             <ReuseImage height={20} width={20} src={Tw} cl="w-[18px] h-[18px] rounded-full" alt="tw"/>
                             </a>

                             
                        </div>
                 <div className=''>
                         
                         <p className='text-[15px] text-start md:text-center mt-2'>© 2025, All rights reserved </p>
                         </div>
              </div>
          </div>
        </>


    )
}


export default Footer;