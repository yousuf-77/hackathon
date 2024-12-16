import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});
export default function Header() {
  return (
    <header className="w-full h-[100px] bg-white flex">
      <div className="w-[92%]   lg:w-[89.30555556%] h-[41px] mt-[29px] mx-auto grid gap-6 grid-cols-[1fr_minmax(0,2fr)_1fr] grid-rows-2 yxs:flex justify-between items-center ">
        <div className="h-full w-fit md:w-[185px] flex justify-between items-center row-start-1 col-start-1">
          <Image
            src={"/images/company-logo.svg"}
            alt="logo"
            height={32}
            width={50}
            className="md:w-[50px] md:h-[32px] xs:w-[40px] xs:h-[22px] w-[32px] h-[17.6px] sm:w-[45px] sm:h-[27px]"
          />
          <p
            className={`${montSerrat.className} font-montserrat sm:text-[28px] xs:text-[24px] text-[19.2px] md:text-[34px] font-bold  leading-[33.16px] text-left`}
          >
            Furniro
          </p>
        </div>
        <div className="h-[24px] xs:w-[240px] w-[200px] yxs:w-[192px] sm:w-[270px] md:w-[320px] llg:w-[370px] lg:w-[430px] flex justify-between items-end mt-[9px] xs:mt-[9px]  row-start-2 col-start-2 justify-self-center">
          <Link
            href={"./"}
            className="xs:text-[14px] text-[12.4px]  yxs:text-[11.2px] sm:text-base font-medium leading-6"
          >
            Home
          </Link>
          <Link
            href={"./Shop"}
            className="xs:text-[14px] text-[12.4px]  yxs:text-[11.2px] sm:text-base font-medium leading-6"
          >
            Shop
          </Link>
          <Link
            href={"./"}
            className="xs:text-[14px] text-[12.4px]  yxs:text-[11.2px] sm:text-base font-medium leading-6"
          >
            Blog
          </Link>
          <Link
            href={"./"}
            className="xs:text-[14px] text-[12.4px]  yxs:text-[11.2px] sm:text-base font-medium leading-6"
          >
            Contact
          </Link>
        </div>
        <div className="llg:w-[210px] xs:w-[120px] w-[96px] md:w-[170px] lg:w-[247px] h-full xs:pt-[7px] pt-[5.6px] flex justify-between items-center row-start-1 col-start-3">
          <button>
            <Image
              src={"/images/icons/account-icon.svg"}
              alt="account"
              height={28}
              width={28}
              className="llg:w-[28px] llg:h-[28px] xs:w-[20px] xs:h-[20px] w-[16px] h-[16px]"
            />
          </button>
          <button>
            <Image
              src={"/images/icons/search-icon.svg"}
              alt="search"
              height={28}
              width={28}
              className="llg:w-[28px] llg:h-[28px] xs:w-[20px] xs:h-[20px] w-[16px] h-[16px]"
            />
          </button>
          <button>
            <Image
              src={"/images/icons/heart-icon.svg"}
              alt="heart"
              height={28}
              width={28}
              className="llg:w-[28px] llg:h-[28px] xs:w-[20px] xs:h-[20px] w-[16px] h-[16px]"
            />
          </button>
          <button>
            <Image
              src={"/images/icons/cart-icon.svg"}
              alt="cart"
              height={28}
              width={28}
              className="llg:w-[28px] llg:h-[28px] xs:w-[20px] xs:h-[20px] w-[16px] h-[16px]"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
