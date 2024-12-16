import Image from "next/image";
import Product1 from "@/components/products/product1";
import Product2 from "@/components/products/product2";
import Product3 from "@/components/products/product3";
import Product4 from "@/components/products/product4";
import Product5 from "@/components/products/product5";
import Product6 from "@/components/products/product6";
import Product7 from "@/components/products/product7";
import Product8 from "@/components/products/product8";
import FurnitureGrid from "@/components/furnitureGrid";
export default function Home() {
  return (
    <main>
      <section>
        <div className=" w-full aspect-[1440/716.83] overflow-hidden">
          <div
            className="w-full aspect-[1440/1007.93] bg-[url('/images/hero-section-bg.svg')] bg-top bg-contain bg-no-repeat 
          "
          >
            <div className="w-full lg:h-[616.83px] xlg:h-[716.83px] flex justify-end">
              <div className="w-[44.65277778%] llg:h-[390px] md:h-[323.7px] sm:h-[268.671px] xs:h-[214.9368px] xxs:h-[171.94944px] h-[144.156992px] lg:h-[443px] llg:mt-[40px] md:mt-[33.2px] sm:mt-[27.556px] xs:mt-[20.667px] xxs:mt-[16.5336px] mt-[14.05356px] lg:mt-[90px] xlg:mt-[153px] sm:mr-[38px] xs:mr-[28.5px] xxs:mr-[22.8px] mr-[19.38px] md:mr-[58px] rounded-[10px] bg-[#FFF3E3] flex justify-center items-center">
                <div className="w-[87.24727838%] h-[88%] xxs:h-[77.6523702%] sm:block flex justify-between flex-col ">
                  <p className="text-base font-semibold leading-5 tracking-[3px] text-left text-[#333333]">
                    New Arrival
                  </p>
                  <p className="llg:text-[44px] md:text-[36.52px] sm:text-[30.3116px] xs:text-[24.24928px] xxs:text-[19.399424px] text-[16.4895104px] lg:text-[52px] font-bold  md:leading-[53.95px] sm:leading-[44.7785px] xs:leading-[30.5839px] xxs:leading-[24.46712px] leading-[20.797052px] text-left text-[#B88E2F] sm:mt-[4px]">
                    Discover Our New Collection
                  </p>
                  <p className="llg:text-lg md:text-[15.1px] sm:text-[12.533px] xs:text-[10.0264px] xxs:text-[8.02112px] text-[6.817952px] font-medium xs:leading-3 sm:leading-6 text-left lg:mt-[17px] llg:mt-[13px] md:mt-[10.79px] sm:mt-[8.9557px] xs:mt-0 xxs:mt-0 mt-0 text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                  <button className="llg:h-[45px] md:h-[37.35px] sm:h-[30.9005px] xs:h-[24.7204px] xxs:h-[19.77632px] h-[16.809872px] llg:w-[180px] md:w-[149.4px] sm:w-[123.902px] xs:w-[99.1216px] xxs:w-[79.29728px] w-[67.402688px] lg:h-[74px] lg:w-[222px] bg-[#B88E2F] flex justify-center items-center md:text-base sm:text-[14px] font-bold leading-6 text-white llg:mt-[26px] md:mt-[21.58px] sm:mt-[5.8914px] xs:mt-[4.33472px] xxs:mt-[3.467776px] mt-[2.94761px] xs:text-[12px] xxs:text-[9.6px] text-[8.16px] xs:font-semibold lg:mt-[46px]">
                    BUY Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[82.15277778%] aspect-[1183/685] mt-[56.47px]  mx-auto flex flex-col gap-[62px] items-center justify-between">
          <div className="max-w-[559px] min-h-[76.71px]">
            <p className="text-[27px] xxs:text-[32px] font-bold leading-[48px] text-center  text-[#333333]">
              Browse The Range
            </p>
            <p className="text-[#666666] text-[17px] xxs:text-[20px] font-normal leading-[30px] text-center text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex lg:justify-between items-center lg:gap-0 lg:flex-nowrap gap-7 flex-wrap justify-center">
            <div className="lg:w-[32.20625528%] w-[250px] md:w-[294px] aspect-[127/182]  flex flex-col justify-between items-center ">
              <div className="aspect-[127/160] w-full">
                <Image
                  src={"/images/dining.svg"}
                  alt="dining"
                  height={480}
                  width={381}
                  className="h-full w-full "
                ></Image>
              </div>
              <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">
                Dining{" "}
              </p>
            </div>
            <div className="lg:w-[32.20625528%] w-[250px] md:w-[294px] aspect-[127/182]  flex flex-col justify-between items-center">
              <div className="aspect-[127/160] w-full">
                <Image
                  src={"/images/living.svg"}
                  alt="living"
                  height={480}
                  width={381}
                  className="h-full w-full "
                ></Image>
              </div>
              <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">
                living{" "}
              </p>
            </div>
            <div className="lg:w-[32.20625528%] w-[250px] md:w-[294px] aspect-[127/182]  flex flex-col justify-between items-center">
              <div className="aspect-[127/160] w-full">
                <Image
                  src={"/images/bedroom.svg"}
                  alt="bedroom"
                  height={480}
                  width={381}
                  className="h-full w-full "
                ></Image>
              </div>
              <p className="text-[24px] font-semibold leading-[36px] text-center text-[#333333] ">
                bedroom{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" xxlg:w-[85.833%] w-[92%] md:w-[95%]  lg:w-[85.833%] xlg:w-[92%] mx-auto  min-h-[1084px] mt-[56px]">
          <h3 className="text-[40px] font-bold leading-[48px] text-center">
            Our Products
          </h3>
          <div className=" w-full mt-[32px] min-h-[924px] h-fit grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 xlg:grid-cols-4 xlg:grid-rows-2 gap-x-[22px] gap-y-[32px] justify-items-center ">
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
            <Product4></Product4>
            <Product5></Product5>
            <Product6></Product6>
            <Product7></Product7>
            <Product1></Product1>
            <div className="xlg:hidden md:block hidden">
              <Product8></Product8>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="mt-[32px] w-[245px] h-[48px]  text-[#B88E2F] text-base text-center bg-white border-[#B88E2F] border">
              Show More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full relative h-[670px] mt-[69px] bg-[#FCF8F3] flex items-center mmd:justify-between mmd:flex-nowrap flex-wrap mmd:gap-0 gap-9  justify-center">
          <div className="w-full flex justify-end absolute">
            <button className="mr-[7.152%] w-[48px] h-[48px] bg-white flex justify-center items-center  rounded-[50%]">
              <Image
                src={"/images/right-arrow2.svg"}
                alt="arrow"
                height={24}
                width={24}
              ></Image>
            </button>
          </div>
          <div className="lg:w-[39.166%] w-[80%] mmd:w-[50.166%] yxs:w-[80%] lg:p-8 md:p-8 yxs:p-8 mmd:p-[6.8px] p-[6.8px] flex justify-center">
            <div className="h-[224px] lg:h-[266px] md:h-[190.4px] yxs:h-[190.4px] mmd:h-[161.84px]  xlg:w-[422px] md:w-[358.7px] yxs:w-full mmd:w-[304.895px] w-full flex flex-col justify-between">
              <div className="w-full h-[151px] lg:h-[151px] md:h-[128.35px] yxs:h-[128.35px] mmd:h-[109.1px] gap-3 flex flex-col justify-between">
                <h4 className="text-[#3A3A3A]  lg:text-[40px] md:text-[34px] yxs:text-[34px] mmd:text-[28.9px] text-[28.9px] font-bold  lg:leading-[48px] md:leading-[40.8px] yxs:leading-[40.8px] mmd:leading-[34.68px] leading-[34.68px] text-left">
                  50+ Beautiful rooms inspiration
                </h4>
                <p className="text-[#616161]  lg:text-[16px] md:text-[13.6px] yxs:text-[13.6px] mmd:text-[11.56px] text-[11.56px] font-medium  lg:leading-[24px] md:leading-[20.4px] yxs:leading-[20.4px] mmd:leading-[17.34px] leading-[17.34px] text-left">
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
              </div>
              <button className="bg-[#B88E2F] lg:w-[176px] md:w-[149.6px] yxs:w-[149.6px] mmd:w-[127.16px] w-[127.16px]  lg:h-[48px] md:h-[40.8px] yxs:h-[40.8px] mmd:h-[34.68px] h-[34.68px]  lg:text-[16px] md:text-[13.6px] yxs:text-[13.6px] mmd:text-[11.56px] text-[11.56px] font-semibold  lg:leading-[24px] md:leading-[20.4px] yxs:leading-[20.4px] mmd:leading-[17.34px] leading-[17.34px] text-center text-white">
                Explore More
              </button>
            </div>
          </div>

          <div className=" lg:w-[60.833%] mmd:w-[51.70805%] yxs:w-[80%] w-[80%] lg:h-[582px] md:h-[494.7px] yxs:h-[494.7px] h-[420.495px] grid  lg:grid-rows-[486px_96px] md:grid-rows-[413.1px_81.6px] yxs:grid-rows-[413.1px_81.6px] grid-rows-[351.135px_69.36px]  lg:grid-cols-[404px_372px_minmax(0px,_1fr)] md:grid-cols-[343.4px_316.2px_minmax(0px,_1fr)] yxs:grid-cols-[343.4px_316.2px_minmax(0px,_1fr)] grid-cols-[291.89px_268.77px_minmax(0px,_1fr)] gap-x-[24px] lg:gap-x-[24px] md:gap-x-[20.4px] yxs:gap-x-[20.4px] overflow-hidden">
            <div className="row-span-2  lg:w-[404px] md:w-[343.4px] yxs:w-[343.4px] w-[291.89px]  lg:h-[582px] md:h-[494.7px] yxs:h-[494.7px] h-[420.495px] bg-contain bg-no-repeat bg-[url('/images/room1.svg')] flex items-end ">
              <div className=" lg:w-[265px] md:w-[225.25px] yxs:w-[225.25px] w-[191.4625px]  lg:h-[130px] md:h-[110.5px] yxs:h-[110.5px] h-[93.925px] flex items-end  lg:mb-[24px] md:mb-[20.4px] yxs:mb-[20.4px] mb-[17.34px] lg:ml-[24px] md:ml-[20.4px] yxs:ml-[20.4px] ml-[17.34px]">
                <div className=" lg:w-[217px] md:w-[184.45px] yxs:w-[184.45px] w-[156.7825px]  lg:h-[130px] md:h-[110.5px] yxs:h-[110.5px] h-[93.925px] bg-[#FFFFFFB8] flex flex-col justify-center ">
                  <div className=" lg:w-[142px] md:w-[120.7px] yxs:w-[120.7px] w-[102.595px] lg:h-[24px] md:h-[20.4px] yxs:h-[20.4px] h-[17.34px] flex justify-between items-center  lg:ml-[32px] md:ml-[27.2px] yxs:ml-[27.2px] ml-[23.12px]">
                    <span className=" lg:text-[16px] md:text-[13.6px] yxs:text-[13.6px] text-[11.56px] font-medium  lg:leading-[24px] md:leading-[20.4px] yxs:leading-[20.4px] leading-[17.34px] text-[#616161]">
                      01
                    </span>
                    <span className=" lg:w-[27px] md:w-[22.95px] yxs:w-[22.95px] w-[19.5075px] border border-[#616161]"></span>
                    <span className=" lg:text-[16px] md:text-[13.6px] yxs:text-[13.6px] text-[11.56px] font-medium  lg:leading-[24px] md:leading-[20.4px] yxs:leading-[20.4px] leading-[17.34px] text-[#616161]">
                      Bed Room
                    </span>
                  </div>
                  <p className="text-[#3A3A3A]  lg:text-[28px] md:text-[23.8px] yxs:text-[23.8px] text-[20.23px] font-semibold  lg:leading-[33.6px] md:leading-[28.56px] yxs:leading-[28.56px] leading-[24.276px] text-left  lg:ml-[32px] md:ml-[27.2px] yxs:ml-[27.2px] ml-[23.12px]">
                    Inner Peace
                  </p>
                </div>
                <button className=" lg:w-[48px] md:w-[40.8px] yxs:w-[40.8px] w-[34.68px]  lg:h-[48px] md:h-[40.8px] yxs:h-[40.8px] h-[34.68px] bg-[#B88E2F] flex justify-center items-center">
                  <Image
                    src={"/images/white-right-arrow.svg"}
                    alt="arrow"
                    height={24}
                    width={24}
                  ></Image>
                </button>
              </div>
            </div>
            <div className=" lg:w-[372px] md:w-[316.2px] yxs:w-[316.2px] w-[268.77px]  lg:h-[486px] md:h-[413.1px] yxs:h-[413.1px] h-[351.135px] bg-contain bg-no-repeat bg-[url('/images/room2.svg')]"></div>
            <div className=" yxs:w-[102px] w-[102px] row-start-2 col-start-2  yxs:h-[22.95px] h-[22.95px]  yxs:gap-[17px] gap-[17px] flex items-center self-center ">
              <div className="w-[27px] yxs:w-[22.95px]  h-[27px] yxs:h-[22.95px]  border border-[#B88E2F] flex justify-center items-center rounded-[50%]">
                <div className="w-[11px] yxs:w-[9.35px] h-[11px] yxs:h-[9.35px]    rounded-[50%] bg-[#B88E2F]"></div>
              </div>
              <div className="w-[11px] yxs:w-[9.35px]  h-[11px] yxs:h-[9.35px] rounded-[50%] bg-[#D8D8D8]"></div>
              <div className="w-[11px] yxs:w-[9.35px]  h-[11px] yxs:h-[9.35px]  rounded-[50%] bg-[#D8D8D8]"></div>
              <div className="w-[11px] yxs:w-[9.35px]  h-[11px] yxs:h-[9.35px]  rounded-[50%] bg-[#D8D8D8]"></div>
            </div>
            <div className="lg:w-[372px] w-[276px] yxs:w-[316.2px]  row-start-1 col-start-3  lg:h-[486px] md:h-[413.1px] yxs:h-[413.1px] h-[351.135px] bg-contain bg-no-repeat bg-[url('/images/room-3.png')]"></div>
          </div>
        </div>
      </section>
      <section className=" w-full justify-start mt-[67px]">
        <div className=" flex flex-col justify-between min-h-[86px]">
          <p className="text-[#616161] text-[20px] font-semibold leading-[30px] text-center">
            Share your setup with
          </p>
          <p className="text-[30px] xxs:text-[36px] yxs:text-[40px] font-bold leading-[48px] text-center text-[#3A3A3A]">
            #FuniroFurniture
          </p>
        </div>

        <FurnitureGrid></FurnitureGrid>
      </section>
    </main>
  );
}
