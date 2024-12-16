import React from 'react';
import Image from 'next/image';

const FurnitureGrid: React.FC = () => {
  return (
    <div className='w-full overflow-hidden mt-[20px]'>
    <div className=" w-[1668px] flex relative overflow-hidden">

{/* Wrap the entire grid in a relative container */}

 <div className="w-[1668px] grid grid-cols-[274px_451px_295px_290px_294px] grid-rows-[382px_382px] justify-items-center absolute -left-[101%] animate-ring gap-4"
 >

{/* Clone the grid and position it off-screen to the left */}

 <div className="w-full aspect-[137/191] bg-[url('/images/funiroFurniture/furniture1.png')] bg-no-repeat bg-cover bg-right self-end"></div>
 <div className="w-full aspect-[451/312] bg-[url('/images/funiroFurniture/furniture2.svg')] bg-no-repeat bg-contain self-end"></div>
<div className="row-span-2 self-center w-full aspect-[295/392] bg-[url('/images/funiroFurniture/furniture3.svg')] bg-no-repeat bg-contain"></div>

<div className="col-span-2 w-full flex gap-4 h-[433px]">

<div className="w-[290px] aspect-[5/6] bg-[url('/images/funiroFurniture/furniture4.svg')] bg-no-repeat bg-contain self-end"></div>
<div className="self-end mx-auto w-[294px] aspect-[425/433]">

 <Image src={'/images/funiroFurniture/furniture5.png'} alt="furniture" width={294} height={433} />

 </div>
 </div>

 <div className="w-[139.1%] aspect-[381/323] bg-[url('/images/funiroFurniture/furniture6.png')] bg-no-repeat bg-center bg-cover justify-self-stretch"></div>

 <div className="w-[76.5%] aspect-[172/121] bg-[url('/images/funiroFurniture/furniture7.svg')] bg-no-repeat bg-cover justify-self-end"></div>

<div className="w-full col-span-2 flex gap-4 items-center">

 <div className="w-[178px] aspect-[89/121] bg-[url('/images/funiroFurniture/furniture8.svg')] bg-no-repeat bg-contain"></div>

<div className="w-[258px] aspect-[129/98] bg-[url('/images/funiroFurniture/furniture9.svg')] bg-no-repeat bg-contain"></div>

</div>

</div>

{/* Original grid */}

 <div className="w-[1668px] grid grid-cols-[274px_451px_295px_290px_294px] grid-rows-[382px_382px] justify-items-center animate-ring gap-4">

<div className="w-full aspect-[137/191] bg-[url('/images/funiroFurniture/furniture1.png')] bg-no-repeat bg-cover bg-right self-end"></div>
 <div className="w-full aspect-[451/312] bg-[url('/images/funiroFurniture/furniture2.svg')] bg-no-repeat bg-contain self-end"></div>

<div className="row-span-2 self-center w-full aspect-[295/392] bg-[url('/images/funiroFurniture/furniture3.svg')] bg-no-repeat bg-contain"></div>

 <div className="col-span-2 w-full flex gap-4 h-[433px]">

<div className="w-[290px] aspect-[5/6] bg-[url('/images/funiroFurniture/furniture4.svg')] bg-no-repeat bg-contain self-end"></div>

 <div className="self-end mx-auto w-[294px] aspect-[425/433]">

 <Image src={'/images/funiroFurniture/furniture5.png'} alt="furniture" width={294} height={433} />

 </div>

</div>

<div className="w-[139.1%] aspect-[381/323] bg-[url('/images/funiroFurniture/furniture6.png')] bg-no-repeat bg-center bg-cover justify-self-stretch"></div>

<div className="w-[76.5%] aspect-[172/121] bg-[url('/images/funiroFurniture/furniture7.svg')] bg-no-repeat bg-cover justify-self-end"></div>

<div className="w-full col-span-2 flex gap-4 items-center">

<div className="w-[178px] aspect-[89/121] bg-[url('/images/funiroFurniture/furniture8.svg')] bg-no-repeat bg-contain"></div>

<div className="w-[258px] aspect-[129/98] bg-[url('/images/funiroFurniture/furniture9.svg')] bg-no-repeat bg-contain"></div>

</div>

</div>
</div>
    </div>
  );
};

export default FurnitureGrid;