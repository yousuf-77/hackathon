import Image from "next/image"
export default function Warranty(){
  return(
    <div className="w-full h-[270px] bg-[#FAF3EA] flex justify-center items-center">
      <div className="w-[92.638%] h-[70px] flex justify-between items-center">
        <div className="w-[337px] h-full flex justify-between">
          <Image src={'/images/trophy.svg'} alt="trophy" height={60} width={60} ></Image>
          <div className="w-[267px] h-full ">
            <h4 className="text-[25px] font-semibold leading-[37.5px] text-[#242424] text-left">High Quality</h4>
            <p className="text-[#898989]  text-[20px] font-medium leading-[30px] text-left w-[267px] text-nowrap">crafted from top materials</p>
          </div>
        </div>
        <div className="w-[328px] h-full flex justify-between">
          <Image src={'/images/warranty-badge.svg'} alt="warranty" height={60} width={60} ></Image>
          <div className="w-[258px] h-full ">
            <h4 className="text-[25px] font-semibold leading-[37.5px] text-[#242424] text-left">Warranty Protection</h4>
            <p className="text-[#898989]  text-[20px] font-medium leading-[30px] text-left">Over 2 years</p>
          </div>
        </div>
        <div className="w-[244px] h-full flex justify-between">
          <Image src={'/images/shipping.svg'} alt="Shipping" height={60} width={60} ></Image>
          <div className="w-[174px] h-full ">
            <h4 className="text-[25px] font-semibold leading-[37.5px] text-[#242424] text-left">Free Shipping</h4>
            <p className="text-[#898989]  text-[20px] font-medium leading-[30px] text-left">Order over 150 $</p>
          </div>
        </div>
        <div className="w-[259px] h-full flex justify-between">
          <Image src={'/images/support.svg'} alt="support" height={60} width={60} ></Image>
          <div className="w-[189px] h-full ">
            <h4 className="text-[25px] font-semibold leading-[37.5px] text-[#242424] text-left">24 / 7 Support</h4>
            <p className="text-[#898989]  text-[20px] font-medium leading-[30px] text-left">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}