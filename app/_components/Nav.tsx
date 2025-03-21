'use client'
import Logo from './logo.png'
import Link from "next/link";
import ReuseImage from './ReuseImage';
import closeImg from '../images/close.png'
import NavImg from '../images/nav.png'
import { API } from '@/app/utilities';
import OED from './OED.json'
import React,  { useContext } from 'react';
import { openModal } from '../WalletProvider';
import { useWriteContract, useAccount } from 'wagmi';
import { ethers } from 'ethers';

const Nav = ({isWallet}:any)=>{

const context = useContext(API)
if(!context){
  throw new Error("somecomponent should use with context ")
}

const {writeContractAsync} = useWriteContract()
const {address} = useAccount()
const {openNav, setOpenNav, setIsLoad, setResMessage} = context;
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');

const Claim = async()=>{
   try{
      setIsLoad(true)

      const trx:any = writeContractAsync({
         address:'0x730852f09869553488eE3162a47cF70c00A04493',
         abi:OED, 
         functionName:"claimReflection"
      })

      const result = await provider.waitForTransaction(trx);
      if(result.status == 1){
         setIsLoad(false)
         setResMessage("you've successfully claimed your rewards")

      }else{
         setIsLoad(false)
         setResMessage("You Most hove 0.01 OED in your wallet to claim Rewards")
      }


   }catch(error:any){
      setIsLoad(false)
       if(error?.data){
           setIsLoad(false)
           setResMessage(error.data.message)
       }else if(error?.reason){
           setIsLoad(false)
           setResMessage(error.reason)
       }
       console.log(error)
   }
}


 
    return(
        <>
          <div className="w-full flex justify-center items-center h-[85px]">
             <div className="container px-3 mx-auto flex justify-between items-center h-[85px]">
                   <div className="nav_left flex items-center justify-start">
                   <a href="/">
                       <ReuseImage height={85} width={85} cl="w-[70px] h-[70px] rounded-full" src={Logo} alt="logo"/>
                   
                    </a>
                     {
                        isWallet == true ? 
                        "":
                        <button onClick={()=> window.location.href = '/'} className="bg-[#DFBC74] ml-8 w-[140px] hidden md:block  h-[40px] rounded-lg text-black text-[16px] ">Home</button>

                     }
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
                         <button onClick={()=> window.location.href = '/'} className="bg-[#DFBC74] w-[160px]  h-[44px] rounded-lg text-black text-[16px] ">Home</button>
               
                        </div>
                         </li>

                         <li className="w-full mb-1 flex justify-center items-center md:hidden">

<div className="icon_group_nav gap-5 flex items-center justify-center">
<button onClick={()=> window.location.href = '/tokenomics'} className="bg-[#DFBC74] w-[160px]  h-[44px] rounded-lg text-black text-[16px] ">Tokenomics</button>

</div>
</li>



                         <li className="w-full  flex justify-center items-center md:hidden"> <Link  onClick={()=> setOpenNav('-999980%')}  href="/whitepaper">
                        <div className="w-[160px] flex justify-center text-[16px] items-center h-[44px] rounded-lg text-[#111]  bg-[#DFBC74]">
                           <span>Whitepaper</span>
                        </div>
                        </Link>
                          </li>

                          
                          

                       </ul>
                   </div>


                   <div className="nav_end  flex justify-center gap-2 md:gap-5 items-center">
                   <div className="icon_group_nav  md:flex items-center justify-center">
                          {
                           address ? 
                           <button onClick={Claim} className="bg-[#DFBC74]  w-[126px]  h-[34px] md:h-[44px] text-black rounded-lg text-whiblackte text-[13px] ">Claim Rewards</button>
               : <button onClick={openModal} className="bg-[#DFBC74]  w-[126px]  h-[34px] text-black rounded-lg text-whiblackte text-[13px] ">Connect Wallet</button>
               
                          }
                        </div>

                        <div className="icon_group_nav hidden gap-5 md:flex items-center justify-center">
                        <button onClick={()=> window.location.href = '/whitepaper'} className="border-[#DFBC74] border-[2px] w-[154px]  h-[44px] rounded-lg text-white text-[16px] ">Whitepaper</button>
               
                        </div>

                       <Link  onClick={()=> setOpenNav('-999980%')}  href="/tokenomics">
                          <div className="md:w-[136px] hidden md:flex justify-center  md:text-lg items-center md:h-[44px] w-[70px] h-[34px] rounded-lg text-[#111] bg-[#DFBC74]">
                             <span className="text-[10px] md:text-[16px]">Tokenomics</span>
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