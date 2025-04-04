'use client'
import React, {useContext, useEffect, useState} from 'react'
import NFTFooter from "@/app/_components/NFTFooter";
import NftNav from "@/app/_components/NftNavBar";
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import ABI from '@/app/_components/nft.json'
import { openModal } from '@/app/WalletProvider';
import { API } from '@/app/utilities';
import ReuseImage from '@/app/_components/ReuseImage';
import Loading from '@/app/images/loading.gif'

const Wallet = ()=>{

       const {address} = useAccount();
       const contractAddress = '0x1bB1d4Ad38Fad65ffFDFA31df5983B3c5c74942B'
       const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');
       const contract = new ethers.Contract(contractAddress , ABI, provider)
       const context = useContext(API)
       const [nft ,setNft] = useState<any>([])
       if(context == undefined){
         throw new Error("context error");
       }

       const {resell, isLoad, setResMessage, resMessage } = context;
         
        

     useEffect(()=>{
          
        const DataFunc = async ()=>{
            try{
               
                if(address){
                    const da = await contract.getNFTsByOwner(address)
                    const [ids,  prices, names, descriptions, images, list] = da;

                      // Transform into an array of objects
                      let formattedNFTs = ids.map((_:any, index:any) => ({
                        tokenId: ids[index].toString(), // Convert BigNumber to string
                        
                        price: ethers.utils.formatUnits(prices[index], "ether"), // Convert price to ETH
                        name: names[index],
                        description: descriptions[index],
                        image: images[index],
                        isListed: list[index]
                      }));
                      setNft(formattedNFTs)
          



                    
                }

            }catch(error){
                console.log(error)
            }
        }
        DataFunc()
     }, [address])


     const [mod, setMod] = useState<Boolean>(false)
     const [nftPrice, setNftPrice] = useState<any>(null)
     const [nftName, setNftName] = useState<any>('')
     const [nftDes, setNftDes] = useState<any>("")
     const [nftImg , setNftImg] = useState<any>("")
    const [nftId, setNftId] = useState<any>(null)

     const resellModal = async(id:any)=>{
        setMod(true)
        setNftId(id)
     }

     const resellFunc = async()=>{ 
       setTimeout(()=>{
        setMod(false)
       }, 1000)
       await resell(nftId, nftPrice, nftName, nftDes, nftImg)
     }


    
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



{
        mod == true?   <div className="w-full z-[190] h-screen bg-[#000000b2] flex items-center fixed top-0 left-0 justify-center">
            <div style={{backgroundColor:'rgba(65, 93, 89, 0.77)'}} className="w-[360px]   h-auto px-6 py-3 rounded-xl flex justify-center items-center">
                   <div className="w-full flex justify-center items-center flex-col">
                     <div className="w-full my-1">
                 
                      <div className="w-full flex justify-between items-center py-2">
                           <h2>Add Nft Details</h2>
                           <button 
                            onClick={()=> setMod(false)}
                           ><img className="w-[20px] h-[20px] rounded-full" src="./close.png" alt="icon"/></button>
                      </div>
                      <span className="ml-2 text-white text-xs">Price</span>
                       <input value={nftPrice} onChange={(e)=> setNftPrice(e.target.value)} className="w-full py-2 rounded-xl text-white bg-transparent border-[#fff] border-[1px] px-4 outline-none" type="number" placeholder="Ex: 8.5 ETH" />
                     </div>
                     <div className="w-full my-1">
                      <span className="ml-2 text-white text-xs">NFT Name</span>
                       <input value={nftName} onChange={(e)=> setNftName(e.target.value)} className="w-full py-2 rounded-xl text-white bg-transparent border-[#fff] border-[1px] px-4 outline-none" type="text" placeholder="Ex: OED FRST" />
                     </div>
                     <div className="w-full my-1">
                      <span className="ml-2 text-white text-xs">NFT Description</span>
                       <input value={nftDes} onChange={(e)=> setNftDes(e.target.value)} className="w-full py-2 rounded-xl text-white bg-transparent border-[#fff] border-[1px] px-4 outline-none" type="text" placeholder="description...." />
                     </div>
                     <div className="w-full my-1">
                      <span className="ml-2 text-white text-xs">NFT Image</span>
                       <input value={nftImg} onChange={(e)=> setNftImg(e.target.value)} className="w-full py-2 rounded-xl text-white bg-transparent border-[#fff] border-[1px] px-4 outline-none" type="text" placeholder="ipfs image url" />
                     </div>

                     <button onClick={resellFunc} className="bg-black mt-4 px-8 w-full rounded-xl py-2 text-white font-black">Resell</button>

                   </div>
            </div>
    </div>:''
    }





        <NftNav/>
        <div className="relative w-full h-auto">
        <img className="fixed -top-[70px] -left-[40px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
        <img className="fixed top-[100px] -right-[10px] h-[300px] w-[300px] object-cover" src="/shadow.png" alt=""/>
      
         <div className="min-h-screen px-3 mt-[120px] w-full flex justify-start md:pl-[70px]  items-center flex-col ">
            <div className='p-5 rounded-xl w-full md:w-[70%] ' style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                <div className="w-full flex justify-start items-center">
                     <img src="/wallet.png" alt="wallet" className="w-[30px] h-[30px] " />
                     {
                        address ?
                     <h3 className="ml-6">{address ? address?.slice(0,8):''}...{address?address?.slice(36, 42):''}</h3>
:
                      <button onClick={()=> openModal()} className="py-3 px-6 text-xs font-black bg-[#dfbc74] ml-5 rounded-xl text-black">Connect Wallet</button>
                     }
                </div>

              
            </div>


            <div className="mt-[70px] md:w-[70%] w-full ">
                  <div className="">
                  <button className="px-4 py-2 rounded-xl border-[1px] border-[#dfbc74] text-[#dfbc74]">Your NFTs</button>
           
                  </div>

                  <div className="mt-10 w-full flex flex-wrap gap-3 justify-between items-center">
                  {
                    nft ? nft.map((el:any)=>(
                    
                            <div className="w-full md:w-[32%] my-3 md:my-0 rounded-xl pb-6"  style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                            <img className="w-full h-[190px]" src={el.image} alt="nft" />
                           <div className="w-full px-3">
                           <h2 className="py-3 text-2xl font-black">{el.name}</h2>
                           <div className=" w-full flex justify-between">
                              <h5>Price</h5>
                              <h4 className="font-black">{el.price} ETH</h4>
                           </div>
  
  
                           <div className="w-full mt-6 flex justify-center items-center">
                            {
                                el.isListed == true?
                                <button disabled className="rounded-lg  bg-[gray] text-black py-2 w-[90%] mx-auto">Listed For Sell</button>
                             :
                             <button onClick={()=>  resellModal(el.tokenId)} className="rounded-lg bg-[#dfbc74] text-black py-2 w-[90%] mx-auto">Resell</button>
                             
                            }
                           </div>
                           </div>
                      </div>
                        
                    )):<h2 className="text-start text-gray-500">You Have No Nft Records...</h2>
                  }
                  </div>
            </div>

        </div>  
        
      
        </div>

        
        <NFTFooter/>

        
        </>
    )
}


export default Wallet;