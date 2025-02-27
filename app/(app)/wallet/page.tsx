'use client'
import React, {ReactNode} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { useParams } from 'next/navigation';



const Wallet = ()=>{



    return(
        <>
        <NftNav/>
        <div className="relative w-full h-auto">
        <img className="fixed -top-[70px] -left-[40px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
         <div className="min-h-screen px-3 mt-[120px] w-full flex justify-start md:pl-[70px]  items-center flex-col ">
            <div className='p-5 rounded-xl w-full md:w-[70%] ' style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                <div className="w-full flex justify-start items-center">
                     <img src="/wallet.png" alt="wallet" className="w-[30px] h-[30px] " />
                     <h3 className="ml-6">0x9843...8f8943hds</h3>
                </div>

                <div className="w-full my-6 flex justify-start items-center">
                     <h6>Total NFT Bought</h6>
                     <h3 className="ml-6">3</h3>
                </div>
                <div className="w-full  flex justify-start items-center">
                     <h6>Total NFT Sold</h6>
                     <h3 className="ml-6">0</h3>
                </div>
            </div>


            <div className="mt-[70px] md:w-[70%] w-full ">
                  <div className="">
                  <button className="px-4 py-2 rounded-xl border-[1px] border-[#dfbc74] text-[#dfbc74]">You Own NFTs</button>
                  <button className="px-4 ml-3 py-2 rounded-xl border-[1px] border-[#dfbc74] text-[#dfbc74]">You Resell NFTs</button>

                  </div>

                  <div className="mt-4 w-full flex flex-wrap justify-between items-center">
                  <div className="w-full md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                          <img className="w-full h-[190px]" src="/nft1.png" alt="nft" />
                         <div className="w-full px-3">
                         <h2 className="py-3 text-2xl font-black">OED FRST</h2>
                         <div className=" w-full flex justify-between">
                            <h5>Price</h5>
                            <h4 className="font-black">0.5 ETH</h4>
                         </div>


                         <div className="w-full mt-6 flex justify-center items-center">
                            <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[230px]">Resell</button>
                           
                         </div>
                         </div>
                    </div>
                  </div>
            </div>

        </div>  
        
      
        </div>

        
        <NFTFooter/>

        
        </>
    )
}


export default Wallet;