import Image from "next/image"
import Product1 from "@/components/products/product1"
import Product2 from "@/components/products/product2"
export default function Home(){
  return(
    <main>
      <section>
        <div className=" w-full aspect-[1440/716.83] overflow-hidden">
        <div className="w-full aspect-[1440/1007.93] bg-[url('/images/hero-section-bg.svg')] bg-top bg-contain bg-no-repeat 
          ">
            <div className="w-full lg:h-[616.83px] xlg:h-[716.83px] flex justify-end">
              <div className="w-[44.65277778%] md:h-[400px] lg:h-[443px] md:mt-[50px] lg:mt-[90px] xlg:mt-[153px] mr-[58px] rounded-[10px] bg-[#FFF3E3] flex justify-center items-center">
            <div className="w-[87.24727838%] h-[77.6523702%]">
              <p className="text-base font-semibold leading-6 tracking-[3px] text-left text-[#333333]">New Arrival</p>
              <p className="md:text-[48px] lg:text-[52px] font-bold leading-[65px] text-left text-[#B88E2F] mt-[4px]">Discover Our New Collection</p>
              <p className="text-lg font-medium leading-6 text-left mt-[17px] text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className="md:h-[60px] md:w-[200px] lg:h-[74px] lg:w-[222px] bg-[#B88E2F] text-center text-base font-bold leading-6  text-white md:mt-[26px] lg:mt-[46px]">BUY Now</button>
            </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    <section >
      <div className="w-[82.15277778%] h-[685px] mt-[56.47px]  mx-auto flex flex-col items-center justify-between">
    <div className="w-[559px] h-[76.71px]">
    <p className="text-[32px] font-bold leading-[48px] text-center  text-[#333333]">Browse The Range</p>
    <p className="text-[#666666] text-[20px] font-normal leading-[30px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="w-[32.20625528%] h-[546px] flex flex-col justify-between items-center" >
        <div className="h-[480px] w-full">
      <Image src={'/images/dining.svg'} alt="dining" height={480} width={381} className="h-full w-full "></Image>
      </div>
        <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">Dining </p>
      </div>
      <div className="w-[32.20625528%] h-[546px] flex flex-col justify-between items-center" >
        <div className="h-[480px] w-full">
      <Image src={'/images/living.svg'} alt="living" height={480} width={381} className="h-full w-full "></Image>
      </div>
        <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">living </p>
      </div>
      <div className="w-[32.20625528%] h-[546px] flex flex-col justify-between items-center" >
        <div className="h-[480px] w-full">
      <Image src={'/images/bedroom.svg'} alt="bedroom" height={480} width={381} className="h-full w-full "></Image>
      </div>
        <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">bedroom </p>
      </div>
      </div>
      </div>
    </section>
    <section>
      <div className="w-[85.833%] mx-auto  min-h-[1084px] mt-[56px]">
        <h3 className="text-[40px] font-bold leading-[48px] text-center">Our Products</h3>
        <div className="mt-[32px] min-h-[924px] h-fit flex-col flex justify-between">
      <Product1></Product1>
      <Product2></Product2>
      </div>
      <div className="w-full flex justify-center items-center">
      <button className="mt-[32px] w-[245px] h-[48px]  text-[#B88E2F] text-base text-center bg-white border-[#B88E2F] border">Show More</button>
      </div>
      </div>
    </section>
    <section>
      <div className="w-full relative h-[670px] mt-[69px] bg-[#FCF8F3] flex items-center justify-between">
        <div className="w-full flex justify-end absolute">
        <button className="mr-[7.152%] w-[48px] h-[48px] bg-white flex justify-center items-center rounded-[50%]">
          <Image src={'/images/right-arrow2.svg'} alt="arrow" height={24} width={24}></Image>
        </button>
        </div>
        <div className="w-[39.166%] flex justify-center">
        <div className="h-[224px] w-[422px] flex flex-col justify-between">
          <div className="w-full h-[151px] flex flex-col justify-between">
          <h4 className="text-[#3A3A3A] text-[40px] font-bold leading-[48px] text-left">50+ Beautiful rooms 
          inspiration</h4>
          <p className="text-[#616161] text-[16px] font-medium leading-[24px] text-left">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
          <button className="bg-[#B88E2F] w-[176px] h-[48px] text-[16px] font-semibold leading-[24px] text-center text-white">Explore More</button>
        </div>
        </div>
        <div className="w-[60.833%] h-[582px] grid grid-rows-[486px_96px] grid-cols-[404px_372px_minmax(0px,_1fr)] gap-x-[24px] overflow-hidden">
      <div className=" row-span-2 w-[404px] h-[582px] bg-contain bg-no-repeat bg-[url('/images/room1.svg')] flex items-end ">
      <div className="w-[265px] h-[130px] flex items-end mb-[24px] ml-[24px]">
      <div className="w-[217px] h-[130px] bg-[#FFFFFFB8] flex flex-col justify-center ">
        <div className="w-[142px] h-[24px] flex justify-between items-center ml-[32px]">
        <span className="text-[16px] font-medium leading-[24px] text-[#616161]">01</span>
        <span className="w-[27px] border border-[#616161]"></span>
        <span  className="text-[16px] font-medium leading-[24px] text-[#616161]">Bed Room</span>
        </div>
        <p className="text-[#3A3A3A] text-[28px] font-semibold leading-[33.6px] text-left ml-[32px]">Inner Peace</p>
      </div>
      <button className="w-[48px] h-[48px] bg-[#B88E2F] flex justify-center items-center">
        <Image src={'/images/white-right-arrow.svg'} alt="arrow" height={24} width={24}></Image>
      </button>
      </div>
      </div>
      <div className="w-[372px] h-[486px] bg-contain bg-no-repeat bg-[url('/images/room2.svg')]"></div>
      <div className="w-[120px] row-start-2  col-start-2  h-[27px] gap-[20px] flex items-center self-center ">
       <div className="w-[27px] h-[27px] border border-[#B88E2F] flex justify-center items-center rounded-[50%]">
         <div className="w-[11px] h-[11px] rounded-[50%] bg-[#B88E2F]"></div>
         </div>
        <div className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></div>
        <div className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></div>
        <div className="w-[11px] h-[11px] rounded-[50%] bg-[#D8D8D8]"></div>
      </div>
      <div className="w-[372px] row-start-1  col-start-3  h-[486px] bg-contain bg-no-repeat bg-[url('/images/room-3.png')]"></div>
        </div>
      </div>
    </section>
    </main>
  )
}