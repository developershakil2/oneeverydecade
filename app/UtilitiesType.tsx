import  {SetStateAction, Dispatch} from 'react'


export interface ConType{
    openNav:any,
    setOpenNav:Dispatch<SetStateAction <any>>;
    resMessage:string,
    setResMessage:Dispatch<SetStateAction<any>>;
    isLoad:boolean;
    setIsLoad:Dispatch<SetStateAction <boolean>>;
 
}