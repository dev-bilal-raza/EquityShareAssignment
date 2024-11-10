import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RaiseFunds = () => {
    return (
        <div className="text-white">
            <div className="relative w-full h-[750px] sm:h-[700px] md:h-[650px] lg:h-[600px] xl:h-[550px] 2xl:h-[520px]">
                <div className='absolute z-20 w-full h-full flex flex-col justify-center items-center gap-2'>
                    <h4 className='text-[#FFFFFF] font-medium text-base text-center'>
                        Your Story Start Here
                    </h4>
                    <h1 className="font-medium text-5xl font-display text-[#FFFFFF] text-center">Ready to raise funds?</h1>
                    <Link
                        href={"/"}
                        className="w-fit inline-flex items-center font-display font-medium px-6 py-3 bg-[#FFFFFF4D] text-[#FFFFFF] rounded-full mt-4"
                    >
                        Get Started
                        &nbsp;
                        <Image src={"/Icons/ArrowIcon.png"} alt='➜' width={16} height={12} />
                    </Link>
                </div>
                <div className='absolute w-full h-full bg-[linear-gradient(0deg,rgba(12,48,61,0.6),rgba(12,48,61,0.5)),linear-gradient(90deg,rgba(194,254,204,0.6)_50%,rgba(99,181,252,0.6)_100%)] z-10'>
                </div>
                <Image
                    className="object-cover w-full h-full"
                    src="/fundsImage.png"
                    alt="Raise Funds"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default RaiseFunds