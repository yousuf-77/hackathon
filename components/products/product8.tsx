import Image from "next/image";
export default function Product8() {
  return (
    <div className="llg:w-[285px] xs:w-[270.75px] llg:h-[446px] xs:h-[423.7px] w-full aspect-[30/47]  relative object-cover ">
      <div className="w-full h-full bg-[#3a3a3a] bg-opacity-[72%] absolute inset-0  flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
        <div className="w-[88.42%] aspect-[21/8] flex flex-col justify-between items-center llg:w-[252px] xs:w-[239.4px] llg:h-[96px] xs:h-[91.2px]">
          <button className=" w-[80.158%] aspect-[101/24] llg:w-[202px] xs:w-[191.9px] llg:h-[48px] xs:h-[45.6px] bg-white llg:text-[16px] xs:text-[15.2px] font-semibold llg:leading-6 xs:leading-[5.7px] text-center text-[#B88E2F]">
            Add to cart
          </button>
          <div className="w-full llg:h-[24px] h-[22.8px] flex justify-between items-center xs:flex-row flex-col gap-[10px]">
            <span className="text-white flex items-center llg:text-[16px] xs:text-[15.2px] font-semibold llg:leading-6 xs:leading-[5.7px] text-left">
              <Image
                src={"/images/share-icon.svg"}
                alt="share"
                height={16}
                width={16}
              ></Image>
              Share
            </span>
            <span className="text-white flex items-center llg:text-[16px] xs:text-[15.2px] font-semibold llg:leading-6 xs:leading-[5.7px] text-left">
              <Image
                src={"/images/compare-icon.svg"}
                alt="compare"
                height={16}
                width={16}
              ></Image>
              Compare
            </span>
            <span className="text-white flex items-center llg:text-[16px] xs:text-[15.2px] font-semibold llg:leading-6 xs:leading-[5.7px] text-left">
              <Image
                src={"/images/heart-icon.svg"}
                alt="heart"
                height={16}
                width={16}
              ></Image>
              Like
            </span>
          </div>
        </div>
      </div>
      <div className="w-full aspect-[285/301] llg:h-[301px] xs:h-[285.95px] bg-[url('/images/products-img/brown-sofa.svg')] bg-center bg-contain bg-no-repeat flex">
        <div className="w-full flex justify-end">
          <div className="llg:h-[48px] h-[45.6px] llg:w-[48px] w-[45.6px] bg-[#2EC1AC] rounded-[50%] text-base font-medium llg:leading-6 xs:leading-[5.7px] flex justify-center llg:mt-[24px] mt-[22.8px] mr-[24px] items-center text-white">
            New
          </div>
        </div>
      </div>
      <div className="llg:h-[145px] xs:h-[137.75px] aspect-[57/29] w-full  p-4 bg-[#F4F5F7]">
        <div className="w-[87.3684%] llg:min-h-[99px] xs:min-h-[94.05px]">
          <div className="llg:w-[138px] xs:w-[131.1px] llg:h-[61px]      xs:h-[57.95px] flex flex-col justify-between xs:justify-around ">
            <p className="llg:text-[24px] xs:text-[22.8px] font-semibold llg:leading-[28.8px] xs:leading-[27.36px] text-left text-[#3A3A3A]">
              Potty
            </p>
            <p className="llg:text-base xs:text-[15.2px] font-medium llg:leading-6 xs:leading-[5.7px] text-left text-[#898989]">
              Minimalist flower pot
            </p>
          </div>
          <div className="llg:mt-[8px] xs:mt-[8px] llg:h-[30px] xs:h-[28.5px] llg:w-[249px] xs:w-[236.55px] flex justify-between items-center flex-wrap">
            <p className="llg:w-[131px] xs:w-[124.45px] llg:h-[30px] xs:h-[28.5px] llg:text-[20px] xs:text-[19px] font-semibold llg:leading-[30px] xs:leading-[28.5px] text-left ">
              Rp 500.000
            </p>
            <p className="hidden llg:text-base xs:text-[15.2px] font-normal llg:leading-6 xs:leading-[5.7px] text-left line-through underline-offset-auto decoration-slice text-[#B0B0B0]">
              Rp 3.500.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
