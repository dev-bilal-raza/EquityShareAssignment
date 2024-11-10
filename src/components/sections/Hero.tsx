import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='min-h-[648px] py-24 2xl:px-8 bg-gradient-to-b from-[#001C3D] via-[#001C3D] to-[#002F66]'>
            <div className='max-w-[90%] pt-12 text-white flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-12 mx-auto'>
                <div className=''>
                    <div className='flex flex-col gap-10 w-full lg:w-[532px]'>
                        <h4 className='text-5xl font-medium font-display text-wrap'>Uplifting communities one project at time</h4>
                        <h4 className='text-xl font-display font-medium text-wrap'>EquityShare is a crowdfunding and real estate equity tokenization platform created to accelerate community development for diverse entrepreneurs.</h4>
                        <div className='flex exsmall:flex-row flex-col gap-2'>
                            <button className='w-fit font-display font-medium bg-[#E0F7FF] rounded-full px-6 py-3 text-[#0C303D]'>Get Started</button>
                            <Link
                                href={"/"}
                                className="w-fit inline-flex items-center font-display font-medium px-6 py-3 bg-[#FFFFFF4D] text-[#ffffff] rounded-full"
                            >
                                <Image src={"/Icons/WatchIcon.png"} alt='➜' width={16} height={12} />
                                &nbsp;
                                Watch Overview
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[440px] xl:w-[560px]'>
                    <Image className='h-[347px] shadow-[-2px_23px_34px_-3px_#2a4970] rounded-2xl object-cover' src={"/HeroImage.png"} alt='' width={560} height={347} />
                </div>
            </div>
        </div>
    )
}

export default Hero