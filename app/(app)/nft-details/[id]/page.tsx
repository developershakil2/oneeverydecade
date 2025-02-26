'use client'
import React, {ReactNode} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { useParams } from 'next/navigation';



const NftMarket = ()=>{


const params = useParams();
const Id = params.id;



    return(
        <>
        <NftNav/>
        <div className="relative w-full h-auto">
        <img className="fixed -top-[70px] -left-[40px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
        <h3 className="text-2xl md:pl-[75px] mt-[120px] font-black">Details of {Id} NFT</h3>
                
        <div className="px-3 mt-[20px] gap-4 md:pl-[75px] w-full flex flex-col md:flex-row justify-evenly items-center  md:items-start">
            
           <div className="w-full md:w-[60%]  ">
             
                <div className="w-full p-4 md:p-5">
                    <img className="w-full md:w-[500] h-auto md:h-[500px] object-cover rounded-xl" src="/nft4.png" alt="nft"/>
               
               <div className="bg-[#23362F]  w-full mt-5 rounded-xl p-4 md:p-10">
                <h4 className="font-black text-2xl">NFT Description</h4>

                <h5 className="text-md ">
                Explore the vibrant world of digital art with this unique NFT, where each pixel tells a story, blending colors and emotions to create a visual masterpiece. Own a piece of the blockchain! This NFT represents more than just art; it symbolizes the fusion of creativity and technology, a digital artifact waiting to be part of your collection
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
                      <h5 className="ml-5">0x9484...643434</h5>
                   </div>

                   <div className="bg-[#3F536A] flex items-center px-3 rounded-xl mt-8 relative w-[250px] h-[50px] ">
                    <div className="absolute -top-5 rounded-xl left-[30%] h-[40px] flex justify-center items-center bg-[#767676] px-3"><h6 className="text-xs">Current Price</h6></div>
                        <h5 className="font-black ">3.5 ETH</h5>
                   </div>
               </div>

               </div>



               <div className="bg-[#23362F]  w-full mt-5 rounded-xl p-4 md:p-10">
                <h4 className=" text-2xl">BUY OR MAKE OFFER</h4>

               <div className="w-full flex justify-between items-center mt-6">
               <button className="w-[120px] md:w-[200px] h-[45px] rounded-lg bg-[#dfbc74] text-black">BUY NOW </button>
               <button className="w-[120px] md:w-[200px] h-[45px] rounded-lg bg-[#dfbc74] text-black">MAKE OFFER </button>
                 
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