import  {SetStateAction, Dispatch} from 'react'


export interface ConType{
    openNav:any,
    setOpenNav:Dispatch<SetStateAction <any>>;
    resMessage:string,
    setResMessage:Dispatch<SetStateAction<any>>;
    isLoad:boolean;
    setIsLoad:Dispatch<SetStateAction <boolean>>;
    getallnfts:()=> Promise<void>;
    singlenft:(id:any)=> Promise<void>;
    buyNFT:(id:any, price:any)=> Promise<void>;
    resell:(id:any, price:any, name:any, description:any, image:any)=>Promise<void>;
 
}