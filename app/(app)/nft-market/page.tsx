'use client'

import React, {useContext, useState, useEffect} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { API } from '@/app/utilities';
import ReuseImage from '@/app/_components/ReuseImage';
import Loading from '@/app/images/loading.gif'
import { useAccount } from 'wagmi';
import { openModal } from '@/app/WalletProvider';

const NftMarket = ()=>{

    const context = useContext(API)
    const [nft ,setNft] = useState<any>([])
    if(context == undefined){
      throw new Error("context error");
      
    }
    const {getallnfts, resMessage, isLoad, buyNFT, setResMessage} = context;
    const {address} = useAccount()
   
    useEffect(()=>{
         async function datad(){
            const data = await getallnfts()
           setNft(data)
         }

         datad()
    }, [])


    console.log(nft, 'nfts')


    return(
        <>

  
  
{
        isLoad == true?   <div className="w-full z-50 h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
        <ReuseImage height={250} width={250} src={Loading} alt="loading" cl="w-[250px] h-[250px] object-cover rounded-full" />
    </div>:''
    }
      {
        resMessage != ''?   <div className="w-full z-[200] h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
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
        <img className="fixed -top-[70px] -left-[40px] z-10 h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] z-10 h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
      
        <div className="px-3 mt-[120px]  md:pl-[75px] w-full flex justify-between items-center  md:items-start">
             <div className="w-full  px-2 md:w-[75%]">
             
             
                 <div className="w-full flex justify-start py-10 md:py-4 flex-col-reverse items-center md:justify-between md:items-center md:flex-row rounded-xl p-4" style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                     <div className="here_wrapper">
                         <h2 className="text-2xl leading-[30px] md:leading-[60px] md:text-[50px] font-black ">
                         One Every Decade NFT  
                         </h2>
                         <h2 className="text-2xl mb-5 leading-[30px] md:leading-[60px] md:text-[50px] font-black ">
                         Own The Rare NFT
                         </h2>
                          {
                           address ?
                           <a className="mt-[10px] px-8 py-3 rounded-xl bg-[#dfbc74] text-black text-center " href="/wallet">
                           My NFTs
                          </a>:
                          <button onClick={()=> openModal()} className="text-black bg-[#dfbc74] rounded-xl px-5 py-3">Connect Wallet</button>
                          }
                     </div>

                     <img className="object-fit w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-xl  " src="/oed.png" alt="oed" />
                 </div>



                 <div className="mt-10 w-full z-50  flex justify-between items-center flex-wrap md:flex-nowrap">
                  
                  
                 {
                  nft ? nft.map((el:any)=>(
                     <>
                       {
                        el.isListed == true ? 
                        <div className="w-full z-50 md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                        <img className="w-full h-[190px]" src="/nft1.png" alt="nft" />
                       <div className="w-full px-3">
                       <h2 className="py-3 text-2xl font-black">{el.name}</h2>
                       <div className=" w-full flex justify-between">
                          <h5>Price</h5>
                          <h4 className="font-black">{el.price} ETH</h4>
                       </div>

                       <div className=" w-full my-3 flex justify-between">
                          <h5>Listed</h5>
                          <h4 className="">02-03-2025</h4>
                       </div>


                       <div className="w-full mt-4 flex justify-between">
                          {
                           address ? <button onClick={async()=> buyNFT(el.tokenId, el.price)} className="rounded-lg z-50 bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>:
                           <button onClick={openModal} className="rounded-lg z-50 bg-[#dfbc74] text-black py-2 w-[120px] text-xs">Connect Wallet</button>
                          }
                          <a className="rounded-lg z-50 bg-[#dfbc74] text-center text-black py-2 w-[120px]" href={`/nft-details/${el.tokenId}`}>
                             View NFT
                          </a>
                       </div>
                       </div>
                  </div>:<h2 className="text-xl font-black text-white">'No NFT available to Buy Currently'</h2>
                       }
                     </>
                  )):<h2 className="text-xl font-black text-white">'No NFT available to Buy Currently'</h2>
                 }


                    <div className="w-full relative md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                          <img className="w-full h-[190px]" src="/nft2.png" alt="nft" />
                          <div className="absolute bg-[#000000c2] w-full h-full  left-0 top-0 flex justify-center items-center ">
                                <div >
                                <img className="w-[35px] mx-auto object-contain mb-4 h-[35px] " src="/lock.png" alt="lock" />
                             <h4 className="text-center">Unlock Will Be At</h4>
                             <h4 className="text-center">02-03-2026</h4>
                                </div>
                          </div>
                         <div className="w-full px-3">
                         <h2 className="py-3 text-2xl font-black">OED EX</h2>
                         <div className=" w-full flex justify-between">
                            <h5>Price</h5>
                            <h4 className="font-black">1 ETH</h4>
                         </div>

                         <div className=" w-full my-3 flex justify-between">
                            <h5>List will At</h5>
                            <h4 className="">02-03-2026</h4>
                         </div>


                         <div className="w-full mt-4 flex justify-between">
                            <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>
                            <a className="rounded-lg bg-[#dfbc74] text-center text-black py-2 w-[120px]" href="/">
                                View NFT
                            </a>
                         </div>
                         </div>
                    </div>


                    <div className="w-full relative md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                          <img className="w-full h-[190px]" src="/nft3.png" alt="nft" />
                          <div className="absolute bg-[#000000c2] w-full h-full  left-0 top-0 flex justify-center items-center ">
                                <div >
                                <img className="w-[35px] mx-auto object-contain mb-4 h-[35px] " src="/lock.png" alt="lock" />
                             <h4 className="text-center">Unlock Will Be At</h4>
                             <h4 className="text-center">02-03-2027</h4>
                                </div>
                          </div>
                         <div className="w-full px-3">
                         <h2 className="py-3 text-2xl font-black">OED SCARCITY</h2>
                         <div className=" w-full flex justify-between">
                            <h5>Price</h5>
                            <h4 className="font-black">1.5 ETH</h4>
                         </div>

                         <div className=" w-full my-3 flex justify-between">
                            <h5>List Will At</h5>
                            <h4 className="">02-03-2027</h4>
                         </div>


                         <div className="w-full mt-4 flex justify-between">
                            <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>
                            <a className="rounded-lg bg-[#dfbc74] text-center text-black py-2 w-[120px]" href="/">
                                View NFT
                            </a>
                         </div>
                         </div>
                    </div>
                         
                 </div>


                 <div className="mt-10 w-full  flex justify-between items-center flex-wrap md:flex-nowrap">
                  
                  
                  <div className="w-full md:w-[330px] my-3 md:my-0 relative rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                        <img className="w-full h-[190px]" src="/nft4.png" alt="nft" />
                        <div className="absolute bg-[#000000c2] w-full h-full  left-0 top-0 flex justify-center items-center ">
                              <div >
                              <img className="w-[35px] mx-auto object-contain mb-4 h-[35px] " src="/lock.png" alt="lock" />
                           <h4 className="text-center">Unlock Will Be At</h4>
                           <h4 className="text-center">02-03-2028</h4>
                              </div>
                        </div>
                       <div className="w-full px-3">
                       <h2 className="py-3 text-2xl font-black">OED VISIONARY</h2>
                       <div className=" w-full flex justify-between">
                          <h5>Price</h5>
                          <h4 className="font-black">2 ETH</h4>
                       </div>

                       <div className=" w-full my-3 flex justify-between">
                          <h5>Listed</h5>
                          <h4 className="">02-03-2028</h4>
                       </div>


                       <div className="w-full mt-4 flex justify-between">
                          <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>
                          <a className="rounded-lg bg-[#dfbc74] text-center text-black py-2 w-[120px]" href="/">
                              View NFT
                          </a>
                       </div>
                       </div>
                  </div>


                  <div className="w-full relative md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                        <img className="w-full h-[190px]" src="/nft5.png" alt="nft" />
                        <div className="absolute bg-[#000000c2] w-full h-full  left-0 top-0 flex justify-center items-center ">
                              <div >
                              <img className="w-[35px] mx-auto object-contain mb-4 h-[35px] " src="/lock.png" alt="lock" />
                           <h4 className="text-center">Unlock Will Be At</h4>
                           <h4 className="text-center">02-03-2029</h4>
                              </div>
                        </div>
                       <div className="w-full px-3">
                       <h2 className="py-3 text-2xl font-black">OED LEGACY</h2>
                       <div className=" w-full flex justify-between">
                          <h5>Price</h5>
                          <h4 className="font-black">2.5 ETH</h4>
                       </div>

                       <div className=" w-full my-3 flex justify-between">
                          <h5>List will At</h5>
                          <h4 className="">02-03-2029</h4>
                       </div>


                       <div className="w-full mt-4 flex justify-between">
                          <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>
                          <a className="rounded-lg bg-[#dfbc74] text-center text-black py-2 w-[120px]" href="/">
                              View NFT
                          </a>
                       </div>
                       </div>
                  </div>


                  <div className="w-full relative md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                        <img className="w-full h-[190px]" src="/nft6.png" alt="nft" />
                        <div className="absolute bg-[#000000c2] w-full h-full  left-0 top-0 flex justify-center items-center ">
                              <div >
                              <img className="w-[35px] mx-auto object-contain mb-4 h-[35px] " src="/lock.png" alt="lock" />
                           <h4 className="text-center">Unlock Will Be At</h4>
                           <h4 className="text-center">02-03-2030</h4>
                              </div>
                        </div>
                       <div className="w-full px-3">
                       <h2 className="py-3 text-2xl font-black">OED DEC</h2>
                       <div className=" w-full flex justify-between">
                          <h5>Price</h5>
                          <h4 className="font-black">3 ETH</h4>
                       </div>

                       <div className=" w-full my-3 flex justify-between">
                          <h5>List Will At</h5>
                          <h4 className="">02-03-2030</h4>
                       </div>


                       <div className="w-full mt-4 flex justify-between">
                          <button className="rounded-lg bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>
                          <a className="rounded-lg bg-[#dfbc74] text-center text-black py-2 w-[120px]" href="/">
                              View NFT
                          </a>
                       </div>
                       </div>
                  </div>
                       
               </div>




             </div>













             <div className="hidden md:w-[25%] px-2 md:flex justify-start items-start flex-col">
                   <div className="w-full  flex justify-center items-center">
                        {
                          nft && nft[0]?.isListed == true ? 
                           <div className="w-full md:w-[330px] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                          <img className="w-full h-[190px]" src={nft[0].image} alt="nft" />
                         <div className="w-full px-3">
                         <h2 className="py-3 text-2xl font-black">{nft[0].name}</h2>
                         <div className=" w-full flex justify-between">
                            <h5>Price</h5>
                            <h4 className="font-black">{nft[0].price} ETH</h4>
                         </div>

                         <div className=" w-full my-3 flex justify-between">
                            <h5>Listed</h5>
                            <h4 className="">02-03-2025</h4>
                         </div>


                         <div className="w-full mt-4 flex justify-between">
                         {
                           address ? <button onClick={async()=> buyNFT(nft[0].tokenId, nft[0].price)} className="rounded-lg z-50 bg-[#dfbc74] text-black py-2 w-[120px]">Buy Now</button>:
                           <button onClick={openModal} className="rounded-lg z-50 bg-[#dfbc74] text-black py-2 w-[120px] text-xs">Connect Wallet</button>
                          }
                           
                            <a className="rounded-lg z-50 bg-[#dfbc74] text-center text-black py-2 w-[120px]" href={`/nft-details/${nft[0].tokenId}`}>
                               View NFT
                            </a>
                         </div>
                         </div>
                    </div>:<h2 className="text-center font-black">"No NFT Available to buy currently "</h2>
                        }
                   </div>


                   <div className="mt-3 w-full">
                     <h3>Up Comming NFTs</h3>

                     <div className="mt-3 w-full">
                         <div className=" w-full rounded-xl my-3 p-2 bg-[#E0EDE8] flex  items-center">
                             <img className="h-[80px] w-[80px] rounded-xl " src="/nft2.png" alt="nft"/>
                             <div className=" ml-3">
                                <h2 className="text-2xl font-black text-black">OED EX</h2>
                                <div className="flex  items-center">
                                      <h6 className="text-black">Price</h6>
                                      <h6 className="font-black text-black ml-3">1 ETH</h6>
                                </div>

                                <div className="flex  items-center">
                                      <h6 className="text-black">List At</h6>
                                      <h6 className=" ml-3 text-black">02-03-2026</h6>
                                </div>
                             </div>
                         </div>




                         <div className=" w-full rounded-xl my-3 p-2 bg-[#E0EDE8] flex  items-center">
                             <img className="h-[80px] w-[80px] rounded-xl " src="/nft3.png" alt="nft"/>
                             <div className=" ml-3">
                                <h2 className="text-2xl font-black text-black">OED SCARCITY</h2>
                                <div className="flex  items-center">
                                      <h6 className="text-black">Price</h6>
                                      <h6 className="font-black text-black ml-3">1.5 ETH</h6>
                                </div>

                                <div className="flex  items-center">
                                      <h6 className="text-black">List At</h6>
                                      <h6 className=" ml-3 text-black">02-03-2027</h6>
                                </div>
                             </div>
                         </div>



                         <div className=" w-full rounded-xl my-3 p-2 bg-[#E0EDE8] flex  items-center">
                             <img className="h-[80px] w-[80px] rounded-xl " src="/nft4.png" alt="nft"/>
                             <div className=" ml-3">
                                <h2 className="text-2xl font-black text-black">OED VISIONARY</h2>
                                <div className="flex  items-center">
                                      <h6 className="text-black">Price</h6>
                                      <h6 className="font-black text-black ml-3">2 ETH</h6>
                                </div>

                                <div className="flex  items-center">
                                      <h6 className="text-black">List At</h6>
                                      <h6 className=" ml-3 text-black">02-03-2028</h6>
                                </div>
                             </div>
                         </div>


                         <div className=" w-full rounded-xl my-3 p-2 bg-[#E0EDE8] flex  items-center">
                             <img className="h-[80px] w-[80px] rounded-xl " src="/nft5.png" alt="nft"/>
                             <div className=" ml-3">
                                <h2 className="text-2xl font-black text-black">OED LEGACY</h2>
                                <div className="flex  items-center">
                                      <h6 className="text-black">Price</h6>
                                      <h6 className="font-black text-black ml-3">2.5 ETH</h6>
                                </div>

                                <div className="flex  items-center">
                                      <h6 className="text-black">List At</h6>
                                      <h6 className=" ml-3 text-black">02-03-2029</h6>
                                </div>
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


export default NftMarket;