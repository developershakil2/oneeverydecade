'use client'
import React, {useState, useEffect} from 'react';
import Logo from './images/logo.jpg'
import Footer from "./_components/Footer";
import Nav from "./_components/Nav";
import ReuseImage from "./_components/ReuseImage";


export default function Home() {

 
  const targetDate:any = new Date('2035-03-02T10:09:00-08:00'); // Target date and time in PST

  // Function to calculate the remaining time including months
  const calculateTimeLeft = () => {
    const now:any = new Date();
    const difference = targetDate - now;
    
    // If the time has passed, return 0 for all units
    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const months = targetDate.getMonth() - now.getMonth() + (12 * (targetDate.getFullYear() - now.getFullYear()));
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
       <div className="home_page">
        <Nav isWallet={false}/>
        
        <div className="container relative mt-10 md:mt-[100px] px-2 md:px-0 mx-auto flex  justify-center items-center">
           
             <div className="w-[290px] z-10   backdrop-blur-3xl shadow-inner shadow-[#dfbc74]  md:shadow-[0_0_100px_#DFBC74] h-[290px] bg-black rounded-full absolute md:right-[80px] right-2 top-0 md:-top-16 md:w-[420px] md:h-[420px]">
                   
             </div>
        
           <div className="md:px-10 z-20">
              <h4 className="text-2xl md:leading-[70px] md:text-[56px] font-black text-left  md:my-0 md:text-center">
              ONE EVERY DECADE
             <span className="text-[#DFBC74] font-black"> OED</span> THE ULTIMATE DIGITAL ASSET OF THE FUTURE
              </h4>
              <h4 className="md:text-center font-black mt-2 text-lg md:text-3xl">
              THE RAREST CRYPTOCURRENCY EVER CREATED
              </h4>
              <div className="md:px-2 md:w-[55%] w-full mx-auto">
                 <h6 className="md:text-center text-justify py-2">
                 Only 21 OED tokens will ever exist. One is minted every 10 years. The last will be minted in 2135.
                 Liquidity is locked for 1,000 years—NO rug pulls, NO manipulation, NO centralized control
                 Holders earn rewards on every trade, and every transaction
                 fuels the auto buy & burn of Bitcoin Edge (BTEG)
                 </h6>
              </div>


              <div className="my-4  flex justify-center gap-5 items-center">
                        <div className="i gap-5 md:flex items-center justify-center">
                        <button onClick={()=> window.location.href = '/tokenomics'} className="border-[#DFBC74] border-[2px] w-[154px]  h-[44px] rounded-lg text-white text-[16px] ">Tokenomics</button>
               
                        </div>

                      
                         
                      
                        <div className=" gap-5 md:flex items-center  justify-center">
                        <button onClick={()=> window.location.href = '/'} className="bg-[#DFBC74]  w-[154px]  h-[44px] rounded-lg text-black text-[16px] ">BUY OED</button>
               
                        </div>

                   </div>
           </div>



        </div>
     {/* hero section end here  */}


        <div className="container mt-[150px] px-5 md:px-0 mx-auto flex  justify-center items-center flex-col ">
                
                <div className="w-full md:w-[70%] px-6 py-3 border-[2px] border-[#dfbc74] rounded-xl flex justify-between items-center">
                    <h2 className="text-white flex items-center text-sm">
                    <ReuseImage height={22} width={22} cl="w-[22px] h-[22px] mr-1 rounded-full" src={Logo} alt="logo"/>
                   
                        Contract Address</h2>
                    <button className="py-2 px-5 bg-[#dfbc74] text-black font-black rounded-xl text-center">Copy</button>
                </div>

                <div className="mt-5 w-full md:w-[60%] mx-auto">
                  <h2 className="text-center font-bold text-md px-0 md:text-lg">
                  OED isn't just a token. It's a financial masterpiece designed to outlive economies, governments, and entire financial systems.</h2>
                
                </div>
        
        </div>

       {/* second section end here */}

        <div className="container bg-[#3B4040] rounded-xl py-[50px] my-[100px] px-2 md:px-0 mx-auto ">

            <h6 className="text-center text-xl font-black  ">
            Own just 1 OED, and you own a piece of <br className="hidden md:block"/> financial history
            </h6>
                  


            <div className='w-full gap-5 mt-[20px] md:mt-[100px] px-3 md:px-10 flex justify-between items-center flex-col md:flex-row '>
          
            <div className="left p-5 h-[380px] rounded-xl border-[#dfbc74] border-[2px] overflow-x-hidden w-full  md:mt-0 items-center md:w-[50%] py-10 flex justify-center md:items-start  relative flex-col">
                  <h5 className="text-center font-black w-full px-0 md:px-5 text-lg md:text-xl">OED THE ONLY TRULY SCARCE <br className="hidden md:block" /> DIGITAL ASSET</h5>
                  <h5 className="text-md   md:text-lg text-center my-2 w-full">
                  OED is 1 million times rarer than Bitcoin.
                  </h5>

                  <div className="w-full px-3 md:px-10 mt-4">
                    <h5 className="my-2 text-sm md:text-md">✅ Bitcoin has 21 million coins. OED has only 21.</h5>
                    <h5 className="my-2 text-sm md:text-md">✅ While Bitcoin miners generate BTC every 10  minutes, OED is minted only once every 10 years</h5>
                    <h5 className="my-2 text-sm md:text-md">✅ Once the final OED is minted in 2135, no more will ever be created.</h5>
                  </div>
            </div>
                 
            <div className="right h-[380px] p-5 rounded-xl border-[#dfbc74] border-[2px] overflow-x-hidden w-full md:mt-0 items-center md:w-[50%] py-10 flex justify-center md:items-start  relative flex-col">
                  <h5 className="text-center font-black w-full px-0 md:px-5 text-lg md:text-xl">FIXED 10-YEAR MINTING SCHEDULE <br className="hidden md:block" /> DON'T MISS OUT!</h5>
                  <h5 className="text-md   md:text-lg text-center my-2 w-full">
                  The clock is ticking. The next OED is coming. Will you own it?
                  </h5>

                  <div className="w-full px-3 md:px-10 mt-4">
                    <h5 className="my-2 text-sm md:text-md">⏳ Next OED Mint Date: March 2, 2035 – 10:09 AM PST</h5>
                    <h5 className="my-2 text-sm md:text-md">⏳ Final OED Mint Date: March 2, 2135 – No more OED will ever be created.</h5>
                  
                  </div>
            </div>
                 
            </div>

         
          
        </div>

        {/* third section end here */}


   <div className="container mt-[100px] mx-auto flex justify-center items-center">
            <div className="w-full md:w-[65%]  rounded-xl bg-[#3B4040] p-6">
                <h5 className="text-center  text-lg md:text-2xl font-black">LIVE COUNTDOWN TO THE NEXT MINTING EVENT</h5>
                 
                 <div className="w-full md:w-[60%] gap-1 mx-auto mt-3 flex justify-between items-center">
                       <div className="flex justify-center items-center flex-col">
                           <span className="text-[12px] md:text-lg">Months</span>
                           <div className="bg-[#212525] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                              <h5 className="text-xl md:text-4xl text-center font-black">
                                {timeLeft.months}
                              </h5>
                           </div>
                       </div>


                       <div className="flex justify-center items-center flex-col">
                           <span className="text-[12px] md:text-lg">Days</span>
                           <div className="bg-[#212525] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                              <h5 className="text-xl md:text-4xl text-center font-black">
                                {timeLeft.days}
                              </h5>
                           </div>
                       </div>



                       <div className="flex justify-center items-center flex-col">
                           <span className="text-[12px] md:text-lg">Hours</span>
                           <div className="bg-[#212525] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                              <h5 className="text-xl md:text-4xl text-center font-black">
                                {timeLeft.hours}
                              </h5>
                           </div>
                       </div>



                       <div className="flex justify-center items-center flex-col">
                           <span className="text-[12px] md:text-lg">Minutes</span>
                           <div className="bg-[#212525] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                              <h5 className="text-xl md:text-4xl text-center font-black">
                                {timeLeft.minutes}
                              </h5>
                           </div>
                       </div>


                       <div className="flex justify-center items-center flex-col">
                           <span className="text-[12px] md:text-lg">Seconds</span>
                           <div className="bg-[#212525] w-[60px] h-[60px] flex justify-center items-center rounded-xl">
                              <h5 className="text-xl md:text-4xl text-center font-black">
                                {timeLeft.seconds}
                              </h5>
                           </div>
                       </div>

                       


                 </div>
            </div>
   </div>
    {/* fourth section end here */}
     
        


        <div className="container gap-8 my-5 md:my-[140px] px-2 md:px-0 mx-auto flex  justify-center items-center md:justify-between flex-col md:flex-row">
        
        <div className="hero_left w-full md:w-[50%] py-3 md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full md:w-[full]">
                <h1 className="  leading-[105%] font-black text-3xl text-left md:text-left md:text-[50px]">
                OED & BTEG THE ULTIMATE ALLIANCE
               </h1>

                </div>
                <h3 className="font-bold w-full my-3 text-xl md:text-2xl text-left  ">
                OED and BTEG work together to create an unstoppable force in crypto history.
                </h3>
                
                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 OED fuels Bitcoin Edge (BTEG's) price growth. Every OED trade includes an automatic 0.5% buy & burn of Bitcoin Edge (BTEG), constantly reducing its supply and increasing its value
                 </p>  
                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
               Bitcoin Edge  (BTEG) enhances OED's liquidity. The OED-BTEG liquidity pool is locked for 1,000 years, ensuring a stable, manipulation-free market.
                 </p>  

                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 One creates ultimate scarcity. The other powers a decentralized financial revolution. Together, they are unstoppable
                 </p>  


               
            </div>



            <div className="hero_left w-full md:w-[50%] py-3 md:py-10 flex justify-center md:justify-end items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full md:w-[full]">
                <h1 className="  leading-[105%] font-black text-3xl text-left md:text-left md:text-[50px]">
                HOW OED CREATES GENERATIONAL WEALTH
               </h1>

                </div>
                <h3 className="font-bold w-full my-3 text-xl md:text-2xl text-left  ">
                Every buy & sell transaction includes a 2% tax
                </h3>
                
                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 <span className="font-black">1% → Liquidity Pool</span> strengthens market stability
                 </p>  
                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 <span className="font-black">0.5% → Holder Reflections </span> ONLY real wallets, NO smart contracts or LP wallets
                 </p>  

                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                <span className="font-black"> 0.5% → BTEG Auto Buy & Burn</span> reduces supply & increases price
                 </p>  
                 <p className="text-justify mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 Every trade makes OED and Bitcoin Edge (BTEG) more valuable. The longer you hold, the richer you become
                 </p>  


               
            </div>





         
          
        </div>

    {/* fifth section end here */}



        <div className="w-full bg-[#3B4040] py-10 md:px-10 my-5 md:my-[100px] px-2 mx-auto flex  justify-center items-center md:justify-between flex-col-reverse md:flex-row">
        
        <div className="hero_left w-full md:w-[50%] py-3 md:py-10 flex justify-center md:justify-start items-center md:items-start flex-col">
                <div className="hero_title_wrapper mt-16 md:mt-0 w-full md:w-[full]">
                <h1 className="text-[#DFBC74]  leading-[105%] font-black text-3xl text-left md:text-left md:text-[50px]">
                OED IS 100% SECURE - LIQUIDITY LOCKED FOR 1,000 YEARS
               </h1>

                </div>
                <h3 className="font-bold w-full my-3 text-xl md:text-2xl text-left  ">
                Unlike other projects that vanish, OED cannot be rug-pulled or manipulated becaus
                </h3>
                
                 <p className="text-left mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 ✅ Liquidity is locked permanently until the year 3025.
                 </p>  
                 <p className="text-left mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 ✅ The smart contract is renounced—no central control.
                 </p>  


                 <h5 className="text-left w-full mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 ✅ Market manipulation is impossible.
                 </h5>  

                 <p className="text-left mt-3 md:text-start text-[16px] md:text-[18px] text-[#fff]">
                 Most cryptos die in 5 years. OED is designed to last for centuries.
                 </p> 
               
            </div>



        <div className="hero_right overflow-x-hidden w-full mt-[70px] md:mt-0 items-center md:w-[50%] py-10 flex justify-center md:justify-end md:items-center  relative flex-col">
                     
                 
        <ReuseImage  height={260} width={260} alt="hero_image" cl="animi block md:hidden rounded-2xl m-2 object-contain  " src={Logo}/>
             


                    <div className=" hidden md:flex justify-between items-center flex-wrap w-[340px] h-auto">
                    <ReuseImage  height={140} width={140} alt="hero_image" cl="animi rounded-xl m-2 object-contain  " src={Logo}/>
                     <ReuseImage  height={140} width={140} alt="hero_image" cl="animi rounded-xl m-2 object-contain  " src={Logo}/>
                     <ReuseImage  height={140} width={140} alt="hero_image" cl="animi rounded-xl m-2 object-contain " src={Logo}/>
                     <ReuseImage  height={140} width={140} alt="hero_image" cl="animi rounded-xl m-2 object-contain  " src={Logo}/>
             
             
                    </div>
                   
               </div>







   



         
          
        </div>
       {/* sixth section end here */}


      
      <div className="w-full mt-[100px] flex justify-center items-center flex-col">
                  <div className="w-full md:w-[50%] mx-auto">
                    <h5 className="text-center font-black text-2xl md:text-4xl">HOW TO BUY OED - DON'T WAIT 10 YEARS FOR THE NEXT ONE!</h5>
                   <h5 className="font-black text-center">Owning OED is simple, but you need to act fast.</h5>
                  </div>
           <div className="container flex-col md:flex-row flex justify-between items-center gap-5 mx-auto mb-5 mt-11">
               <div className="card h-[300px] flex justify-center items-center flex-col w-full md:w-[25%] p-3 rounded-xl border-[1px] border-[#dfbc74] ">
                           <h5 className="text-3xl font-black text-center">Step</h5>
                              <div className="bg-white my-4 flex justify-center items-center rounded-full w-[60px] h-[60px]">
                                <h1 className="text-black text-4xl font-black">1</h1>
                              </div>
                          <h5 className="text-center font-black">Buy WETH or BTEG on the Base Network.</h5>
               </div>

               <div className="card h-[300px] flex justify-center items-center flex-col w-full md:w-[25%] p-3 rounded-xl border-[1px] border-[#dfbc74] ">
                           <h5 className="text-3xl font-black text-center">Step</h5>
                              <div className="bg-white my-4 flex justify-center items-center rounded-full w-[60px] h-[60px]">
                                <h1 className="text-black text-4xl font-black">2</h1>
                              </div>
                          <h5 className="text-center font-black">Connect your wallet to Uniswap.</h5>
               </div>

               <div className="card h-[300px] flex justify-center items-center flex-col w-full md:w-[25%] p-3 rounded-xl border-[1px] border-[#dfbc74] ">
                           <h5 className="text-3xl font-black text-center">Step</h5>
                              <div className="bg-white my-4 flex justify-center items-center rounded-full w-[60px] h-[60px]">
                                <h1 className="text-black text-4xl font-black">3</h1>
                              </div>
                          <h5 className="text-center font-black">Swap WETH or BTEG for OED.</h5>
               </div>

               <div className="card h-[300px] flex justify-center items-center flex-col w-full md:w-[25%] p-3 rounded-xl border-[1px] border-[#dfbc74] ">
                           <h5 className="text-3xl font-black text-center">Step</h5>
                              <div className="bg-white my-4 flex justify-center items-center rounded-full w-[60px] h-[60px]">
                                <h1 className="text-black text-4xl font-black">4</h1>
                              </div>
                          <h5 className="text-center font-black">Hold OED and watch as its value increases over time.</h5>
               </div>
           </div>
      </div>

      {/* seven section end here */}



    
      <div className="container bg-[#3B4040] rounded-xl py-[50px] my-[100px] px-2 md:px-0 mx-auto ">

<h6 className="text-center text-xl font-black  ">
WHY OED IS THE MOST POWERFUL CRYPTO <br className="hidden md:block"/>  EVER CREATED
</h6>
      


<div className='w-full gap-5 mt-[20px] md:mt-[100px] px-3 md:px-10 flex justify-between items-center flex-col md:flex-row '>

<div className="left p-5 md:h-[340px] rounded-xl border-[#dfbc74] border-[2px] overflow-x-hidden w-full  md:mt-0 items-center md:w-[50%] py-10 flex justify-center md:items-start  relative flex-col">
      
      <div className="w-full px-3 md:px-10 mt-4">
        <h5 className="my-2 text-sm md:text-md">✅ Only 21 tokens will ever exist - The ultimate scarcity.</h5>
        <h5 className="my-2 text-sm md:text-md">✅ New OED is minted only once every 10 years</h5>
        <h5 className="my-2 text-sm md:text-md">✅ Final supply is locked at 21 OED - No more will ever be created.</h5>
        <h5 className="my-2 text-sm md:text-md">✅ Liquidity is locked for 1,000 years - No rug pulls, no manipulation.</h5>
        <h5 className="my-2 text-sm md:text-md">✅ Holders earn passive income from every transaction.</h5>
        <h5 className="my-2 text-sm md:text-md">✅ Every trade fuels auto-buybacks of BTEG – Increasing its value over time.</h5>
      </div>
</div>
     
<div className="right h-[340px] p-5 rounded-xl border-[#dfbc74] border-[2px] overflow-x-hidden w-full md:mt-0 items-center md:w-[50%] py-10 flex justify-center md:items-start  relative flex-col">
<div className="w-full px-3 md:px-10 mt-4">
        <h5 className="my-2 text-sm md:text-md">🎉 Own OED, and you own the rarest asset in the world.</h5>
        <h5 className="my-2 text-sm md:text-md">🎉 Own Bitcoin Edge (BTEG), and you own the future of decentralized wealth.</h5>
        <h5 className="my-2 text-sm md:text-md">🎉 Own both, and you control the ultimate financial revolution.</h5>
        <h5 className="my-2 text-sm md:text-md">📢 OED and BTEG together are the perfect storm. One fuels the other. Both will be unstoppable.</h5>
       
      </div>
</div>
     
</div>



</div>





       

        <Footer/>


       </div>
  );
}
