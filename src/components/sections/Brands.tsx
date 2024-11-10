import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
const BrandSection = () => {
  return (
    <div className='2xl:w-2/3 flex lg:flex-row flex-col justify-center lg:items-center mx-auto p-4 px-6 xl:px-20 lg:gap-6'>
        <h4 className='p-2 w-32 font-display text-[#0C303D] font-normal text-xl'>
            As seen in
        </h4>
     <Marquee direction='right' pauseOnHover gradient={false} speed={40} className="py-8">
        <div className='flex gap-12'>
            <Image src={"/brands/brand-1.png"} alt='Brand 1' width={122} height={53}/>
            <Image src={"/brands/brand-2.png"} alt='Brand 2' width={122} height={53}/>
            <Image src={"/brands/brand-3.png"} alt='Brand 3' width={122} height={53}/>
            <Image src={"/brands/brand-4.png"} alt='Brand 4' width={122} height={53}/>
            <Image src={"/brands/brand-5.png"} alt='Brand 5' width={122} height={53}/>
            <Image src={"/brands/brand-6.png"} alt='Brand 6' width={122} height={53}/>
            <Image src={"/brands/brand-7.png"} alt='Brand 7' width={122} height={53}/>
        </div>
     </Marquee>
    </div>
  )
}

export default BrandSection;