'use client'
import React, {ReactNode} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { useParams } from 'next/navigation';



const Docs = ()=>{



    return(
        <>
        <NftNav/>
        <div className="relative w-full h-auto">
        <img className="fixed -top-[70px] -left-[40px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
       

            <div className="mt-[120px] mx-auto md:w-[60%] px-3 w-full ">
               <h2 className="text-2xl text-center md:text-4xl font-black">OneEveryDecade (OED) NFT Whitepaper</h2>
                
                <h3 className="mt-[100px] font-black text-2xl">
                Introduction
                </h3>
                <h6 className="mt-3">
                The OneEveryDecade (OED) NFT Marketplace is a revolutionary platform designed to offer ultra-scarce digital assets that span over a century. As a part of the broader OED ecosystem, the NFT marketplace operates on a fixed minting cycle, ensuring long-term scarcity and value appreciation.
                </h6>

                <h3 className="mt-6 mb-3 font-black">NFT Structure & Scarcity Model</h3>
                <h6>The OED NFT Marketplace follows a structured release schedule that spans over a century.</h6>
                
                <h3 className="mt-6 font-black ">Phase 1: Incremental Growth (2025-2034)</h3>
                <h6>Price Increase: +0.5 ETH per year.</h6>

                <div className="bg-[#787878] mt-10 w-full p-5 rounded-xl">
                    <div className="border-b-2 border-[#fff] py-3 flex justify-between items-center">
                          <h3 className="text-sm font-black w-[50%] md:text-lg">NFT Edition</h3>
                          <h3 className="text-sm font-black w-[25%] md:text-lg">Year</h3>
                          <h3 className="text-sm font-black w-[25%] md:text-lg">Starting Price</h3>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED FRST</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2025</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">0.5 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED EX</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2026</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">1.0 ETH</h5>
                    </div>

                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED SCARCITY</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2027</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">1.5 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED VISIONARY</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2028</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">2.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED LEGACY</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2029</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">2.5 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED DEC</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2030</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">3.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED MILESTONE</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2031</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">3.5 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED REBELLION</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2032</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">4.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED ULTRA RARE</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2033</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">4.5 ETH</h5>
                    </div>

                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED DECADE</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2034</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">5.0 ETH</h5>
                    </div>

                  



                </div>











                <h3 className="mt-[100PX] font-black ">Phase 2: Scarcity Driven Growth (2035-2135)</h3>
                <h6>Price Increase: +1 ETH per NFT..</h6>

                <div className="bg-[#787878] mt-10 w-full p-5 rounded-xl">
                    <div className="border-b-2 border-[#fff] py-3 flex justify-between items-center">
                          <h3 className="text-sm font-black w-[50%] md:text-lg">NFT Edition</h3>
                          <h3 className="text-sm font-black w-[25%] md:text-lg">Year</h3>
                          <h3 className="text-sm font-black w-[25%] md:text-lg">Starting Price</h3>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED NEW ORDER</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2035</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">6.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED GRAIL</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2045</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">7.0 ETH</h5>
                    </div>

                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED RELIC</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2055</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">8.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED TIMELESS</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2065</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">9.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED THE ELITE</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2075</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">10.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED NO TURNING</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2085</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">11.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED FURY</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2095</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">12.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED THE FINAL</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2105</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">13.0 ETH</h5>
                    </div>


                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED THE PENULTIMATE</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2115</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">14.0 ETH</h5>
                    </div>

                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">OED THE GOLD</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2125</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">15.0 ETH</h5>
                    </div>

                    <div className=" py-2 flex justify-between items-center">
                          <h5 className="text-sm  md:text-md w-[50%]">THE LAST OED</h5>
                          <h5 className="text-sm  md:text-md w-[25%]">2135</h5>
                          <h5 className="text-sm  md:text-md w-[25%] font-black">21.5 ETH</h5>
                    </div>


                  



                </div>



                <h3 className="mt-[100PX] font-black  font-2xl md:text-3xl">Key Features of the OED NFT Marketplace</h3>
                  <h6>• Fixed Minting Cycle: New NFTs are minted every 10 years</h6>
                  <h6>• Immutable Pricing Model: Prices increase predictably over time, ensuring long-term value appreciation.</h6>
                  <h6>• Ultra-Scarcity Mechanism: With only 21 NFTs minted over 110 years, each NFT becomes a historic collectible.</h6>
                  <h6>• Decentralized Ownership: The marketplace is powered by smart contracts, ensuring transparent and trustless transactions</h6>

           

                  <h3 className="mt-[50PX] font-black  font-2xl md:text-3xl">VISION AND FUTURE</h3>
                  <h6>• A True Digital Store of Value: While fiat and economies collapse, OED NFTs ensure value appreciation through controlled scarcity.</h6>
                  <h6>• Designed to Outlast Governments & Currencies: No centralized authority can inflate or devalue OED NFTs.</h6>
                  <h6>• A Legacy Asset for Future Generations: The ultimate scarce financial asset designed to exist for over a millennium.</h6>




            </div>

    
        
      
        </div>

        
        <NFTFooter/>

        
        </>
    )
}


export default Docs;