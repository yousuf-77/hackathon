import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" border-t border-[#0000002B]">
      <div className="w-full min-h-[505px] h-fit py-[48px]  flex justify-center items-center ">
        <div className="w-[86.1118%] h-[82.97%] flex flex-col md:justify-between gap-5 ">
          <div className="w-full xs:h-[74.463%] h-[1000px] grid  xs:grid-cols-2 xs:grid-rows-[200px_312px] md:grid-cols-4 md:grid-rows-1 xs:gap-x-4 md:gap-[6px] justify-items-center">
            <div>
              <p className="text-[24px] font-bold leading-[36px] text-left">
                Funiro.
              </p>
              <div className="w-full h-[72px] mt-[50px]">
                <p className="text-[#9F9F9F] text-[16px] font-normal leading-[24px] text-left">
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className="text-[#9F9F9F] text-[16px] font-normal leading-[24px] text-left">
                  FL 33134 USA
                </p>
              </div>
            </div>

            <div className="w-[68px] h-full flex flex-col row ">
              <p className="text-[16px] font-medium leading-[24px] text-left text-[#9F9F9F]">
                Links
              </p>
              <div className="flex w-[66px] h-[233px] mt-[50px] xs:mt-[79px] flex-col justify-between">
                <Link
                  href={"./"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Home
                </Link>
                <Link
                  href={"./Shop"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Shop
                </Link>
                <Link
                  href={"./"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  About
                </Link>
                <Link
                  href={"./"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-[140px] h-[242px] flex flex-col">
              <p className="text-[16px] font-medium leading-[24px] text-center xs:text-left text-[#9F9F9F]">
                Help
              </p>
              <div className="flex w-[140px] h-[163px] mt-[50px]  xs:mt-[79px] flex-col justify-between xs:items-start items-center">
                <Link
                  href={"./"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Payment Options
                </Link>
                <Link
                  href={"./Shop"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Returns
                </Link>
                <Link
                  href={"./"}
                  className="text-[16px] font-medium leading-[24px] text-left"
                >
                  Privacy Policies
                </Link>
              </div>
            </div>

            <div className="w-full h-[90px] xs:h-[101px] flex flex-col justify-between xs:row-start-1 row-start-2 xs:col-start-2 md:col-start-4">
              <p className="text-[#9F9F9F] text-[16px] font-medium leading-[24px] text-left">
                Newsletter
              </p>
              <div className="w-full h-[24px] flex justify-between gap-[16px] flex-wrap">
                <div className="xs:w-[200px]  md:w-full llg:w-[200px] h-full border-b border-black ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent placeholder:text-[#9F9F9F]"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <button className="w-[75.01px] h-full border-b border-black text-center text-[16px] font-medium leading-[24px] ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[59px] border-t border-[#D9D9D9] flex justify-start items-end">
            <p className="text-[16px] font-normal leading-[24px] text-left">
              2023 furino. All rights reverved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
