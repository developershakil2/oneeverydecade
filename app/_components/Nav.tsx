'use client'
import Logo from './logo.png'
import Link from "next/link";
import ReuseImage from './ReuseImage';
import closeImg from '../images/close.png'
import NavImg from '../images/nav.png'
import { API } from '@/app/utilities';
import React,  { useContext } from 'react';


const Nav = ({isWallet}:any)=>{

const context = useContext(API)
if(!context){
  throw new Error("somecomponent should use with context ")
}

const {openNav, setOpenNav} = context
 
    return(
        <>
          <div className="w-full flex justify-center items-center h-[85px]">
             <div className="container px-3 mx-auto flex justify-between items-center h-[85px]">
                   <div className="nav_left">
                   <a href="/">
                       <ReuseImage height={85} width={85} cl="w-[70px] h-[70px] rounded-full" src={Logo} alt="logo"/>
                   
                    </a>
                   </div>

                   <div className="nav_middle">
                
                       <ul style={{left:openNav}} id="menu_items" className="list-none z-[30] flex justify-center p-0 h-[85] items-center gap-8">
                          <li className="w-full mb-0 flex justify-end items-center md:hidden">
                          <button onClick={()=> setOpenNav('-999980%')}>
                         <ReuseImage height={35} width={35} cl="w-[35px] h-[35px] rounded-full" src={closeImg} alt="logo"/>
                         </button>
                          </li>
                       
                     

                         <li className="w-full mb-1 flex justify-center items-center md:hidden">

                         <div className="icon_group_nav gap-5 flex items-center justify-center">
                         <button onClick={()=> window.location.href = '/tokenomics'} className="bg-[#DFBC74] w-[160px]  h-[44px] rounded-lg text-black text-[16px] ">Tokenomics</button>
               
                        </div>
                         </li>

                         <li className="w-full  flex justify-center items-center md:hidden"> <Link  onClick={()=> setOpenNav('-999980%')}  href="#">
                        <div className="w-[160px] flex justify-center text-[16px] items-center h-[44px] rounded-lg text-[#111]  bg-[#DFBC74]">
                           <span>Whitepaper</span>
                        </div>
                        </Link>
                          </li>

                          
                          

                       </ul>
                   </div>


                   <div className="nav_end  flex justify-center gap-5 items-center">
                        <div className="icon_group_nav hidden gap-5 md:flex items-center justify-center">
                        <button onClick={()=> window.location.href = '/buy'} className="border-[#DFBC74] border-[2px] w-[154px]  h-[44px] rounded-lg text-white text-[16px] ">Tokenomics</button>
               
                        </div>

                       <Link  onClick={()=> setOpenNav('-999980%')}  href="/staking">
                          <div className="w-[136px] flex justify-center text-[16px] md:text-lg items-center h-[44px] rounded-lg text-[#111] bg-[#DFBC74]">
                             <span className="text-[16px]">Whitepaper</span>
                          </div>
                          </Link>
                         
                         <button onClick={()=> setOpenNav('0%')} className="block md:hidden">
                         <ReuseImage height={35} width={35} cl="w-[35px] h-[35px] rounded-full" src={NavImg} alt="logo"/>
                         </button>

                   </div>
             </div>
      
          </div>
        </>


    )
}


export default Nav;