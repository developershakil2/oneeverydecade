
import React, {useState, useEffect} from 'react'
import { openModal } from '../WalletProvider'
import { useAccount } from 'wagmi'

const NftNav = ()=>{


    const [nav, stNav] = useState<any>('hidden')
     const [bc, stBc] = useState<any>('rgba(65, 93, 89, 0.17)')
    const {address} = useAccount()
       useEffect(()=>{
        if(typeof window != 'undefined'){
            if(window.innerWidth <= 768){
               stBc('black')
            }
        }
       }, [])


    return(

        <>
 
              <div className="fixed top-0 left-0 z-[500]">
              <div className={`${nav} bg-[black] w-full z-20 fixed md:flex justify-start items-start px-6 md:px-0 md:items-center flex-col  top-0 left-0 py-3 md:w-[60px] min-h-screen`} style={{backgroundColor:bc}}>
                <div className="flex justify-end items-center w-full md:hidden">
               
                <button onClick={()=> stNav("hidden")}><img src="/close.png" className="w-[25px] h-[25px] mt-4 mr-3 " alt="nav"/></button>
              
                </div>
                <a href="/" className="mt-4 flex items-center">
                    <img className="w-[30px] h-[30px] " src="/home.png" alt=""/>
                    <h5 className="block md:hidden font-black mt-2 ml-4">Home</h5>
                </a>

                <a href="/nft-market" className="mt-8 flex items-center">
                    <img className="w-[30px] h-[30px] " src="/dash.png" alt=""/>
                    <h5 className="block md:hidden font-black  ml-4">Dashboard</h5>

                </a>

                <a href="/wallet" className="my-8 flex items-center">
                    <img className="w-[30px] h-[30px] " src="/wallet.png" alt=""/>
                    <h5 className="block md:hidden font-black  ml-4">Wallet</h5>

                </a>

                <a href="/docs" className="flex  items-center">
                    <img className="w-[35px] h-[35px] " src="/doc.png" alt=""/>
                    <h5 className="block md:hidden font-black  ml-4">OED Whitepaper</h5>

                </a>

                <a href="./nft.pdf" target="_blank" rel="noopener noreferrer"  className="flex mt-8 items-center">
                    <img className="w-[35px] h-[35px] " src="/sec.png" alt=""/>
                    <h5 className="block md:hidden font-black  ml-4">AUDIT Report</h5>

                </a>
        </div>


        <div style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}} className="fixed z-10 md:px-[60px]  top-0 left-0  h-[70px] flex justify-between items-center  w-full px-3 ">
                
                <a href="/"> <img src="/logo.png" alt="logo" className="w-[50px] hidden md:block ml-3 md:ml-10 h-[50px] rounded-full" />
             
             </a>

              <div className=" ml-0 md:ml-10 w-[180px] block md:hidden justify-center items-center h-[40px] border-[#dfbc74] rounded-xl">
                <button onClick={()=> stNav("flex")}><img src="/nav.png" className="w-[35px] h-[35px] mt-1 " alt="nav"/></button>
              </div>
              <div >
              <button onClick={()=> openModal()} className="outline-none border-none px-4 py-3 rounded-xl text-xs md:text-md text-black bg-[#dfbc74]">
                {address ? `${address?.slice(0,5)}...${address?.slice(36,42)}`:'Connect Wallet'}
              </button>

              </div>
            

           
        </div>
              </div>


              
        
        </>
    )
}


export default NftNav;