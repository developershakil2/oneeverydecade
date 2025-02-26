



const NftNav = ()=>{


    return(

        <>
 
              <div className="fixed top-0 left-0 z-50">
              <div className="hidden z-20 fixed md:flex justify-start items-center flex-col  top-0 left-0 py-3 w-[60px] min-h-screen" style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}}>
                <a href="/" className="mt-4">
                    <img className="w-[30px] h-[30px] " src="/home.png" alt=""/>
                </a>

                <a href="/wallet" className="my-8">
                    <img className="w-[30px] h-[30px] " src="/wallet.png" alt=""/>
                </a>

                <a href="/docs" className="">
                    <img className="w-[30px] h-[30px] " src="/doc.png" alt=""/>
                </a>
        </div>


        <div style={{backgroundColor:'rgba(65, 93, 89, 0.17)'}} className="fixed z-10 md:px-[60px]  top-0 left-0  h-[70px] flex justify-between items-center  w-full px-3 ">
              <div className="border-[1px] ml-0 md:ml-10 w-[180px] flex justify-center items-center md:w-[300px] h-[40px] border-[#dfbc74] rounded-xl">
                  <input placeholder="Search NFTs" id="search" type="search" className="px-3 rounded-lg w-full h-[40px] outline-none bg-transparent text-[#dfbc74] " />
              </div>
              <div >
              <button className="outline-none border-none px-4 py-3 rounded-xl text-xs md:text-md text-black bg-[#dfbc74]">Connect Wallet</button>

              </div>
            

           
        </div>
              </div>


              
        
        </>
    )
}


export default NftNav;