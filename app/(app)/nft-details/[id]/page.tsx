'use client'
import React, { useContext, useEffect, useState} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { useParams } from 'next/navigation';
import { API } from '@/app/utilities';
import { ethers } from 'ethers';
import ReuseImage from '@/app/_components/ReuseImage';
import { useAccount } from 'wagmi';
import Loading from '@/app/images/loading.gif';
import { openModal } from '@/app/WalletProvider';

const NftMarket = ()=>{

const {address} = useAccount()
const params = useParams();

const context = useContext(API)
const [nft ,setNft] = useState<any>([])
if(context == undefined){
  throw new Error("context error");
  
}

const {singlenft, buyNFT, isLoad, setResMessage, resMessage} = context;
let nftPrice  = 0;
useEffect(()=>{
     const dataFunc = async()=>{
        const data = await singlenft(params.id)
        setNft(data)
    }
    dataFunc()
    nftPrice = nft[2]
}, [])


const Buynft = async(id:any, price:any)=>{
      const data = await buyNFT(id, price);
}

    return(
        <>

{
        isLoad == true?   <div className="w-full z-50 h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
        <ReuseImage height={250} width={250} src={Loading} alt="loading" cl="w-[250px] h-[250px] object-cover rounded-full" />
    </div>:''
    }
      {
        resMessage != ''?   <div className="w-full z-50 h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
            <div className="w-[360px] bg-white h-auto p-10 rounded-xl flex justify-center items-center">
                   <div className="w-full flex justify-center items-center flex-col">
                     <h2 className="text-black text-xl font-black text-center">
                        {resMessage}
                     </h2>
                     <button onClick={()=> setResMessage('')} className="bg-black mt-4 px-4 rounded-xl py-2 text-white font-black" data-translate data-original-text="okay">Okay</button>

                   </div>
            </div>
    </div>:''
    }


        <NftNav/>
        <div className="relative w-full h-auto">
        <img className="fixed -top-[70px] -left-[40px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
        <h3 className="text-2xl md:pl-[75px] mt-[120px] font-black">NFT Details</h3>
                
        <div className="px-3 mt-[20px] gap-4 md:pl-[75px] w-full flex flex-col md:flex-row justify-evenly items-center  md:items-start">
            
           <div className="w-full md:w-[60%]  ">
             
                <div className="w-full p-4 md:p-5">
                    <img className="w-full md:w-[500] h-auto md:h-[500px] object-cover rounded-xl" src={nft ? nft[5]:''} alt="nft"/>
               
               <div className="bg-[#23362F]  w-full mt-5 rounded-xl p-4 md:p-10">
                <h4 className="font-black text-2xl">NFT Description</h4>

                <h5 className="text-md ">
                 {
                    nft ? nft[4]:'loading...'
                 }
                </h5>

               </div>
                </div>

           </div>

           <div className="w-full md:w-[40%]">
              
           <div className="bg-[#23362F]  w-full mt-5 rounded-xl p-4 md:p-10">
                <h4 className="font-black text-2xl">OED VISIONARY</h4>

               <div className="w-flull mt-6">
                   <div className="flex">
                      <h5 >Current Ownerr</h5>
                      <h5 className="ml-5">{nft ? `${nft[1]?.slice(0, 9)}...${nft[1]?.slice(36, 42)}`:'loading'}</h5>
                   </div>

                   <div className="bg-[#3F536A] flex items-center px-3 rounded-xl mt-8 relative w-[250px] h-[50px] ">
                    <div className="absolute -top-5 rounded-xl left-[30%] h-[40px] flex justify-center items-center bg-[#767676] px-3"><h6 className="text-xs">Current Price</h6></div>
                        <h5 className="font-black ">{nft[2] ? ethers.utils.formatEther(nft[2]) :'loading'} ETH</h5>
                   </div>
               </div>

               </div>



               <div className="bg-[#23362F]  w-full mt-5 rounded-xl p-4 md:p-10">
                <h4 className=" text-2xl">BUY OR MAKE OFFER</h4>

               <div className="w-full flex justify-between items-center mt-6">
              
               {
                           address ? <button onClick={()=>Buynft(nft[0], ethers.utils.formatEther(nft[2]))} className="w-[120px] md:w-[200px] h-[45px] rounded-lg bg-[#dfbc74] text-black">BUY NOW </button>
                           :
                           <button onClick={openModal} className="rounded-lg z-50 bg-[#dfbc74] text-black py-2 w-[140px] text-sm">Connect Wallet</button>
                          }
               </div>

               </div>
           </div>
          
        </div>
      
      
        </div>

        
        <NFTFooter/>

        
        </>
    )
}


export default NftMarket;