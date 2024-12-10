import Link from "next/link"
import Image from "next/image"
import Product1 from "@/components/products/product1"
import Warranty from "@/components/warranty-component/warranty"
export default function Shop(){
  return(
    <main>
      <section>
      <div className="w-full aspect-[360/79] bg-[url('/images/shop-bg.svg')] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="h-[96px] w-[124px]">
      <p className="w-full h-[72px] text-5xl font-medium leading-[72px]">Shop</p>
      <div className="w-full h-[24px]  flex justify-between">
        <Link href={'./'} className="text-base font-medium leading-6 text-left">Home</Link>
        <Image src={'/images/right-arrow.svg'} alt="arrow" height={20} width={20}></Image>
        <Link href={'./Shop'} className="text-base font-light leading-6">Shop</Link>
      </div>
      </div>
      </div>
      <div className="h-[100px] w-full bg-[#F9F1E7] flex justify-center items-center">
        <div className="w-[86.25%] flex justify-between items-center">
        <div className="w-[451px] flex justify-between items-center">
          <button className="w-[85px] h-[30px] flex justify-between ">
            <Image src={'/images/filter-icon.svg'} alt="filter" height={25} width={25}></Image>
            <p className="text-[20px] font-normal leading-[30px]">Filter</p>
          </button>
          <div className="w-[28px] h-[28px]">
            <Image src={'/images/circles.svg'} alt="circles" height={28} width={28}></Image>
          </div>
          <div className="w-[24px] h-[24px]">
            <Image src={'/images/list-view.svg'} alt="list" height={24} width={24}></Image>
          </div>
          <div className="h-[37px] w-[237px] border-l-2 border-[#9f9f9f]text-[16px] font-normal leading-[24px] flex justify-end items-center">Showing 1–16 of 32 results</div>
        </div>
        <div className="w-[443px] h-[55px] flex justify-between items-center ">
          <div className="w-[126px] h-full flex justify-between items-center">
            <p className="text-[20px] font-normal leading-[30px]">Show</p>
            <div className="w-[55px] h-full bg-white text-[#9F9F9F] text-[20px] font-normal leading-[30px] flex justify-center items-center ">16</div>
          </div>
          <div className="w-[288px] h-full flex justify-between items-center">
            <p className="text-[20px] font-normal leading-[30px]">Short by</p>
            <div className="w-[188px] h-full bg-white text-[#9F9F9F] text-[20px] font-normal leading-[30px] flex justify-center items-center">Default</div>
          </div>
        </div>
        </div>
      </div>
      </section>
      <section>
        <div className="h-[2034px] w-[86.38%] mx-auto flex flex-col justify-between mt-[63px] ">
          <Product1></Product1>
          <Product1></Product1>
          <Product1></Product1>
          <Product1></Product1>
          <div className="w-full flex justify-center">
          <div className="w-[392px] h-[90px] pt-[30px] flex gap-[38px]">
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#b88e2f] text-center text-white text-[20px] font-normal leading-[30px] ">1</button>
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-center text-black text-[20px] font-normal leading-[30px] ">2</button>
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-center text-black text-[20px] font-normal leading-[30px] ">3</button>
          <button className=" w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-[20px] font-light leading-[30px] text-center ">
          Next </button>
          </div>
          </div>
        </div>
      </section>
      <section className="mt-[85px]">
        <Warranty></Warranty>
      </section>
    </main>
  )
}