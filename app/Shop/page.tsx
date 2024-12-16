import Link from "next/link";
import Image from "next/image";
import Warranty from "@/components/warranty-component/warranty";
import Product1 from "@/components/products/product1";
import Product2 from "@/components/products/product2";
import Product3 from "@/components/products/product3";
import Product4 from "@/components/products/product4";
import Product7 from "@/components/products/product7";
import Product8 from "@/components/products/product8";

export default function Shop() {
  return (
    <main>
      <section>
        <div className="w-full min-h-[200px] aspect-[360/79] bg-[url('/images/shop-bg.svg')] bg-cover bg-no-repeat flex justify-center items-center">
          <div className="h-[96px] w-[124px]">
            <p className="w-full h-[72px] text-5xl font-medium leading-[72px]">
              Shop
            </p>
            <div className="w-full h-[24px]  flex justify-between">
              <Link
                href={"./"}
                className="text-base font-medium leading-6 text-left"
              >
                Home
              </Link>
              <Image
                src={"/images/right-arrow.svg"}
                alt="arrow"
                height={20}
                width={20}
              ></Image>
              <Link href={"./Shop"} className="text-base font-light leading-6">
                Shop
              </Link>
            </div>
          </div>
        </div>
        <div className="h-fit p-4 mmd:p-0 mmd:h-[100px] w-full bg-[#F9F1E7] flex justify-center items-center">
          <div className="md:w-[86.25%] w-[92.25%] lg:w-[86.25%]  flex justify-between items-center mmd:flex-row flex-col gap-4">
            <div className=" lg:w-[451px] w-[345px] md:w-[360.8px] flex justify-between items-center">
              <button className=" lg:w-[85px] w-[68px]  lg:h-[30px] h-[24px] flex justify-between ">
                <Image
                  src={"/images/filter-icon.svg"}
                  alt="filter"
                  height={25}
                  width={25}
                  className=" lg:w-[24px] w-[19.2px] lg:h-[24px] h-[19.2px]"
                ></Image>
                <p className=" lg:text-[20px] text-[16px] font-normal  lg:leading-[30px] leading-[24px]">
                  Filter
                </p>
              </button>
              <div className=" lg:w-[28px] w-[22.4px]  lg:h-[28px] h-[22.4px]">
                <Image
                  src={"/images/circles.svg"}
                  alt="circles"
                  height={28}
                  width={28}
                  className=" lg:w-[24px] w-[19.2px]  lg:h-[24px] h-[19.2px]"
                ></Image>
              </div>
              <div className=" lg:w-[24px] w-[19.2px]  lg:h-[24px] h-[19.2px]">
                <Image
                  src={"/images/list-view.svg"}
                  alt="list"
                  height={24}
                  width={24}
                  className=" lg:w-[24px] w-[19.2px] lg:h-[24px] h-[19.2px]"
                ></Image>
              </div>
              <div className=" lg:h-[37px] h-[29.6px]  lg:w-[237px] w-[179.6px] md:w-[189.6px] border-l-2 border-[#9f9f9f]text-[16px] lg:text-[16px] text-[12.8px] font-normal  lg:leading-[24px] leading-[19.2px] flex justify-end items-center">
                Showing 1–16 of 32 results
              </div>
            </div>
            <div className=" lg:w-[443px] w-[297px] md:w-[354.4px]  lg:h-[55px] h-[44px] flex justify-between items-center ">
              <div className=" lg:w-[126px] w-[97px] md:w-[100.8px] h-full lg:h-full  flex justify-between items-center">
                <p className=" lg:text-[20px] text-[16px] font-normal  lg:leading-[30px] leading-[24px]">
                  Show
                </p>
                <div className=" lg:w-[55px] w-[44px] h-full lg:h-full  bg-white text-[#9F9F9F] lg:text-[20px] text-[16px] font-normal  lg:leading-[30px] leading-[24px] flex justify-center items-center ">
                  16
                </div>
              </div>
              <div className=" lg:w-[288px] w-[188px] md:w-[230.4px] h-full lg:h-full flex justify-between items-center">
                <p className=" lg:text-[20px] text-[16px] font-normal  lg:leading-[30px] leading-[24px]">
                  Short by
                </p>
                <div className=" lg:w-[188px] w-[110px] md:w-[150.4px] h-full lg:h-full  bg-white text-[#9F9F9F]  lg:text-[20px] text-[16px] font-normal lg:leading-[30px] leading-[24px] flex justify-center items-center">
                  Default
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-[2034px]  mx-auto flex flex-col justify-between mt-[63px] gap-[40px]  xxlg:w-[86.38%] w-[92%] md:w-[95%]  lg:w-[85.833%] xlg:w-[92%] ">
          <div className=" w-full mt-[32px] min-h-[924px] h-fit grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 xlg:grid-cols-4 xlg:grid-rows-2 gap-x-[22px] gap-y-[32px] justify-items-center ">
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
            <Product4></Product4>
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
            <Product4></Product4>
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
            <Product4></Product4>
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
            <Product4></Product4>
            <div className="xlg:hidden md:block hidden">
              <Product7></Product7>
            </div>
            <div className="xlg:hidden md:block hidden">
              <Product8></Product8>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[280.6px] h-[72px] pt-[24px] flex gap-[30.4px]">
              <button className="w-[44px] h-[44px] rounded-[10px] bg-[#b88e2f] text-center text-white text-[16px] font-normal leading-[24px]">
                1
              </button>
              <button className="w-[44px] h-[44px] rounded-[10px] bg-[#F9F1E7] text-center text-black text-[16px] font-normal leading-[24px]">
                2
              </button>
              <button className="w-[44px] h-[44px] rounded-[10px] bg-[#F9F1E7] text-center text-black text-[16px] font-normal leading-[24px]">
                3
              </button>
              <button className="w-[74.4px] h-[44px] rounded-[10px] bg-[#F9F1E7] text-[16px] font-light leading-[24px] text-center">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[85px]">
        <Warranty></Warranty>
      </section>
    </main>
  );
}
