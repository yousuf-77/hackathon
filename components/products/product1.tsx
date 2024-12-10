import Image from "next/image"
export default function Product1(){
  return(
    <section>
      <div className="w-full h-fit flex justify-between items-center" >
      <div className="w-[285px] h-[446px] relative object-cover ">
        <div className="w-full h-full bg-[#3a3a3a] bg-opacity-[72%] absolute inset-0   flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-[252px] h-[96px] flex flex-col justify-between items-center ">
            <button className="w-[202px] h-[48px] bg-white text-[16px] font-semibold leading-6 text-center text-[#B88E2F]">Add to cart</button>
            <div className="w-full h-[24px] flex justify-between items-center">
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/share-icon.svg'} alt="share" height={16} width={16} ></Image>
                Share
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/compare-icon.svg'} alt="compare" height={16} width={16} ></Image>
                Compare
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/heart-icon.svg'} alt="heart" height={16} width={16} ></Image>
                Like
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[301px] bg-[url('/images/products-img/table.svg')] bg-center bg-contain bg-no-repeat flex">
        <div className="h-[48px] w-[48px] bg-[#E97171] rounded-[50%] text-base font-medium leading-6 flex justify-center mt-[24px] ml-[213px] items-center text-white">-30%</div>
        </div>
        <div className="h-[145px] w-full p-4 bg-[#F4F5F7]">
          <div className="w-[87.3684%] h- min-h-[99px]">
          <div className="w-138px h-[61px] flex flex-col justify-between">
            <p className="text-[24px] font-semibold leading-[28.8px] text-left text-[#3A3A3A]">Syltherine</p>
            <p className="text-base font-medium leading-6 text-left text-[#898989]">Stylish cafe chair</p>
          </div>
          <div className="mt-[8px] h-[30px] w-[249px] flex justify-between flex-wrap">
            <p className="w-[131px] h-[30px] text-[20px] font-semibold leading-[30px] text-left ">Rp 2.500.000</p>
            <p className="text-base font-normal leading-6 text-left line-through underline-offset-auto decoration-slice text-[#B0B0B0]">Rp 3.500.000</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[285px] h-[446px] relative object-cover ">
      <div className="w-full h-full bg-[#3a3a3a] bg-opacity-[72%] absolute inset-0   flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-[252px] h-[96px] flex flex-col justify-between items-center ">
            <button className="w-[202px] h-[48px] bg-white text-[16px] font-semibold leading-6 text-center text-[#B88E2F]">Add to cart</button>
            <div className="w-full h-[24px] flex justify-between items-center">
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/share-icon.svg'} alt="share" height={16} width={16} ></Image>
                Share
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/compare-icon.svg'} alt="compare" height={16} width={16} ></Image>
                Compare
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/heart-icon.svg'} alt="heart" height={16} width={16} ></Image>
                Like
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[301px] bg-[url('/images/products-img/chair.svg')] bg-center bg-contain bg-no-repeat flex">
        <div className="h-[48px] hidden w-[48px] bg-[#E97171] rounded-[50%] text-base font-medium leading-6  justify-center mt-[24px] ml-[213px] items-center text-white">-30%</div>
        </div>
        <div className="h-[145px] w-full p-4 bg-[#F4F5F7]">
          <div className="w-[87.3684%] h- min-h-[99px]">
          <div className="w-138px h-[61px] flex flex-col justify-between">
            <p className="text-[24px] font-semibold leading-[28.8px] text-left text-[#3A3A3A]">Leviosa</p>
            <p className="text-base font-medium leading-6 text-left text-[#898989]">Stylish cafe chair</p>
          </div>
          <div className="mt-[8px] h-[30px] w-[249px] flex justify-between flex-wrap">
            <p className="w-[131px] h-[30px] text-[20px] font-semibold leading-[30px] text-left ">Rp 2.500.000</p>
            <p className="text-base hidden font-normal leading-6 text-left line-through underline-offset-auto decoration-slice text-[#B0B0B0]">Rp 3.500.000</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[285px] h-[446px] relative object-cover ">
      <div className="w-full h-full bg-[#3a3a3a] bg-opacity-[72%] absolute inset-0   flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-[252px] h-[96px] flex flex-col justify-between items-center ">
            <button className="w-[202px] h-[48px] bg-white text-[16px] font-semibold leading-6 text-center text-[#B88E2F]">Add to cart</button>
            <div className="w-full h-[24px] flex justify-between items-center">
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/share-icon.svg'} alt="share" height={16} width={16} ></Image>
                Share
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/compare-icon.svg'} alt="compare" height={16} width={16} ></Image>
                Compare
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/heart-icon.svg'} alt="heart" height={16} width={16} ></Image>
                Like
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[301px] bg-[url('/images/products-img/sofa.svg')] bg-center bg-contain bg-no-repeat flex">
        <div className="h-[48px] w-[48px] bg-[#E97171] rounded-[50%] text-base font-medium leading-6 flex justify-center mt-[24px] ml-[213px] items-center text-white">-50%</div>
        </div>
        <div className="h-[145px] w-full p-4 bg-[#F4F5F7]">
          <div className="w-[87.3684%] h- min-h-[99px]">
          <div className="w-138px h-[61px] flex flex-col justify-between">
            <p className="text-[24px] font-semibold leading-[28.8px] text-left text-[#3A3A3A]">Lolito</p>
            <p className="text-base font-medium leading-6 text-left text-[#898989]">Luxury big sofa</p>
          </div>
          <div className="mt-[8px] h-[30px] w-[249px] flex justify-between flex-wrap">
            <p className="w-[131px] h-[30px] text-[20px] font-semibold leading-[30px] text-left ">Rp 7.000.000</p>
            <p className="text-base font-normal leading-6 text-left line-through underline-offset-auto decoration-slice text-[#B0B0B0]">Rp 14.000.000</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[285px] h-[446px] relative object-cover">
      <div className="w-full h-full bg-[#3a3a3a] bg-opacity-[72%] absolute inset-0   flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-[252px] h-[96px] flex flex-col justify-between items-center ">
            <button className="w-[202px] h-[48px] bg-white text-[16px] font-semibold leading-6 text-center text-[#B88E2F]">Add to cart</button>
            <div className="w-full h-[24px] flex justify-between items-center">
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/share-icon.svg'} alt="share" height={16} width={16} ></Image>
                Share
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/compare-icon.svg'} alt="compare" height={16} width={16} ></Image>
                Compare
              </span>
              <span className="text-white flex text-[16px] font-semibold leading-6 text-left">
                <Image src={'/images/heart-icon.svg'} alt="heart" height={16} width={16} ></Image>
                Like
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[301px] bg-[url('/images/products-img/sofa-set.svg')] bg-center bg-contain bg-no-repeat flex">
        <div className="h-[48px] w-[48px] bg-[#2EC1AC] rounded-[50%] text-base font-medium leading-6 flex justify-center mt-[24px] ml-[213px] items-center text-white">New</div>
        </div>
        <div className="h-[145px] w-full p-4 bg-[#F4F5F7]">
          <div className="w-[87.3684%] h- min-h-[99px]">
          <div className="w-138px h-[61px] flex flex-col justify-between">
            <p className="text-[24px] font-semibold leading-[28.8px] text-left text-[#3A3A3A]">Respira</p>
            <p className="text-base font-medium leading-6 text-left text-[#898989]">Outdoor bar table and stool</p>
          </div>
          <div className="mt-[8px] h-[30px] w-[249px] flex justify-between flex-wrap">
            <p className="w-[131px] h-[30px] text-[20px] font-semibold leading-[30px] text-left ">Rp 500.000</p>
            <p className="text-base hidden font-normal leading-6 text-left line-through underline-offset-auto decoration-slice text-[#B0B0B0]">Rp 14.000.000</p>
          </div>
          </div>
        </div>


      </div>
      </div>
    </section>
  )
}