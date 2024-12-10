import Image from "next/image"
import {Montserrat} from 'next/font/google' ;
import Link from "next/link";
const montSerrat=Montserrat({
  subsets:["latin"],
  weight:['300','400','500', '700','900']
})
export default function Header(){
  return(
    <header className="w-full h-[100px] bg-white flex">
      <div className="w-[89.30555556%] h-[41px] mt-[29px] ml-[54px] flex justify-between ">
        <div className="h-full w-[185px] flex justify-between items-center">
          <Image src={'/images/company-logo.svg'} alt="logo" height={32} width={50} />
          <p className={`${montSerrat.className} font-montserrat text-[34px] font-bold leading-[41.45px] text-left`}>Furniro</p>
        </div>
        <div className="h-[24px] w-[430px] flex justify-between items-center mt-[9px]">
        <Link href={'./'} className=" text-base font-medium leading-6" >Home</Link>
        <Link href={'./Shop'} className=" text-base font-medium leading-6" >Shop</Link>
        <Link href={'./'} className=" text-base font-medium leading-6" >Blog</Link>
        <Link href={'./'} className=" text-base font-medium leading-6" >Contact</Link>
        </div>
        <div className="w-[247px] h-full pt-[7px] flex justify-between">
          <button>
            <Image src={'/images/icons/account-icon.svg'} alt="account" height={28} width={28}  />
          </button>
          <button>
            <Image src={'/images/icons/search-icon.svg'} alt="search" height={28} width={28}  />
          </button>
          <button>
            <Image src={'/images/icons/heart-icon.svg'} alt="heart" height={28} width={28}  />
          </button>
          <button>
            <Image src={'/images/icons/cart-icon.svg'} alt="cart" height={28} width={28}  />
          </button>
        </div>
      </div>
    </header>
  )
}