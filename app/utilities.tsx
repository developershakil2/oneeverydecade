'use client'
import React, {createContext, useState,  ReactNode} from 'react'
import { ConType } from './UtilitiesType'
import {ethers} from 'ethers';
import ABI from './_components/nft.json'
import { useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
export const API = createContext<ConType | undefined>(undefined)

interface ContextProps{
    children:ReactNode
}

// https://rpc.ankr.com/bsc

const ContextComponent = ({children}:ContextProps)=>{
      const {writeContractAsync} = useWriteContract();

    const [openNav, setOpenNav] = useState<any>('-9999%')
   
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const [resMessage, setResMessage] = useState<any>('')
    const contractAddress = '0x6847fC83425776aABEF6f1D5435EBCC8ddc67c5f'
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');
    const contract = new ethers.Contract(contractAddress , ABI, provider)

   
    const singlenft = async(id:any)=>{
        try{
            setIsLoad(true)
           const nft = await contract.getNFT(id)
              
            if(nft){
                setIsLoad(false)
                return nft;
            }
            
        }catch(error){console.log(error); setIsLoad(false)}
    }

    const buyNFT = async(id:any, price:any )=>{
        try{
           setIsLoad(true)
            const txReceipt = await writeContractAsync({
                address:contractAddress,
                abi:ABI,
                functionName:"buyNFT",
                args:[id],
                value: parseEther(price),
            })

          const receipts = await provider.waitForTransaction(txReceipt);

          if(receipts.status == 1){
            setIsLoad(false)
            setResMessage("You've successfully purchased NFT Thank you for ")
          }else{
             setIsLoad(false)
             setResMessage("nft owner can't buy nft if you're not this nft owner then please try agian later")
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


    const resell = async(id:any, price:any, name:any, description:any, image:any)=>{
      try{
         setIsLoad(true)
          const txReceipt = await writeContractAsync({
              address:contractAddress,
              abi:ABI,
              functionName:"resellNFT",
              args:[id, price, name, description, image]
          })

        const receipts = await provider.waitForTransaction(txReceipt);

        if(receipts.status == 1){
          setIsLoad(false)
          setResMessage("You've successfully Listed your NFT for Resell Thank you for ")
        }else{
           setIsLoad(false)
           setResMessage("something is wrong please try agian later")
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







    
    const getallnfts = async()=>{
      try{ 
           setIsLoad(true)
           const allnft = await contract.getAllNFTs();
           if(allnft){
            setIsLoad(false)
            const [tokenIds, owners, prices, names, descriptions, images, list] = allnft;

            // Transform into an array of objects
            let formattedNFTs = tokenIds.map((_:any, index:any) => ({
              tokenId: tokenIds[index].toString(), // Convert BigNumber to string
              owner: owners[index],
              price: ethers.utils.formatUnits(prices[index], "ether"), // Convert price to ETH
              name: names[index],
              description: descriptions[index],
              image: images[index],
              isListed: list[index]
            }));
               
           return formattedNFTs;
            
        }else{
          setIsLoad(false)
          return null

        }
           
      }catch(error:any){
        setIsLoad(false)
        console.log(error);
      }
    }



    return(

         <API.Provider value={{openNav, setOpenNav,
            isLoad, setIsLoad,
            resMessage,
            setResMessage,
           getallnfts,
           singlenft,
           buyNFT, 
           resell

         }}>
            {children}
         </API.Provider>
    )


}


export default ContextComponent;
