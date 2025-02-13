import Image from "next/image";


interface ReactChildrenContext{
    alt:string,
    src:any,
    cl:string,
    height:number,
    width:number
}

const ReuseImage = ({src, cl, height, width, alt }:ReactChildrenContext)=>{


    return(
        <Image src={src} className={cl} height={height} width={width} alt={alt}/>
    )
}



export default ReuseImage;