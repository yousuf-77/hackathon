import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="w-full h-[505px] flex justify-center items-center">
      <div className="w-[86.1118%] h-[82.97%] flex flex-col justify-between">
      <div className="w-full h-[74.463%] flex justify-between">
        <div>
          <p className="text-[24px] font-bold leading-[36px] text-left">Funiro.</p>
          <div className="w-[285px] h-[72px] mt-[50px]">
            <p className="text-[#9F9F9F] text-[16px] font-normal leading-[24px] text-left">400 University Drive Suite 200 Coral Gables,</p>
            <p className="text-[#9F9F9F] text-[16px] font-normal leading-[24px] text-left">FL 33134 USA</p>
          </div>
        </div>
        <div className="w-[62.665%] h-full flex justify-between">
          <div className="w-[49.577%] h-full flex justify-between">
            <div className="w-[68px] h-full flex flex-col ">
              <p className="text-[16px] font-medium leading-[24px] text-left text-[#9F9F9F]">Links</p>
              <div className="flex w-[66px] h-[233px] mt-[79px] flex-col justify-between">
              <Link href={'./'} className="text-[16px] font-medium leading-[24px] text-left">Home</Link>
              <Link href={'./Shop'} className="text-[16px] font-medium leading-[24px] text-left">Shop</Link>
              <Link href={'./'} className="text-[16px] font-medium leading-[24px] text-left">About</Link>
              <Link href={'./'} className="text-[16px] font-medium leading-[24px] text-left">Contact</Link>
              </div>
            </div>
            <div className="w-[140px] h-[242px] flex flex-col">
            <p className="text-[16px] font-medium leading-[24px] text-left text-[#9F9F9F]">Help</p>
              <div className="flex w-[140px] h-[163px] mt-[79px] flex-col justify-between">
              <Link href={'./'} className="text-[16px] font-medium leading-[24px] text-left">Payment Options</Link>
              <Link href={'./Shop'} className="text-[16px] font-medium leading-[24px] text-left">Returns</Link>
              <Link href={'./'} className="text-[16px] font-medium leading-[24px] text-left">Privacy Policies</Link>
              </div>
            </div>
          </div>
          <div className="w-[286px] h-[101px] flex flex-col justify-between">
            <p className="text-[#9F9F9F] text-[16px] font-medium leading-[24px] text-left">Newsletter</p>
            <div className="w-full h-[24px] flex justify-between">
              <div className="w-[200px] h-full border-b border-black ">
                <input type="email" name="email" id="email" className="bg-transparent placeholder:text-[#9F9F9F]" placeholder="Enter Your Email Address" />
              </div>
              <button className="w-[75.01px] h-full border-b border-black text-center text-[16px] font-medium leading-[24px] ">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[59px] border-t border-[#D9D9D9] flex justify-start items-end">
        <p className="text-[16px] font-normal leading-[24px] text-left">2023 furino. All rights reverved</p>
      </div>
      </div>
      </div>
    </footer>
  );
}