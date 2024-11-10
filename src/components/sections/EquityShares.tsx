import React from 'react'

const EquitySharesSection = () => {
  return (
    <div className='w-full bg-[#8C6A27] flex xl:flex-row flex-col justify-between gap-10 px-4 sm:px-8 py-12 lg:p-12 xl:p-24'>
        <h2 className='text-[#FFFAE1] font-display text-4xl sm:text-5xl font-medium'>
            EquityShare by numbers
        </h2>
        <ul className='flex sm:flex-row flex-col gap-10'>
            <li className='space-y-2'>
                <h4 className='font-display text-[#FFFFFF] font-medium text-4xl'>
                $2.7B+
                </h4>
                <p className='font-display text-[#FFFAE1] font-medium text-base'>
                invested on platform
                </p>
            </li>
            <li className='space-y-2'>
                <h4 className='font-display text-[#FFFFFF] font-medium text-4xl'>
                230K+
                </h4>
                <p className='font-display text-[#FFFAE1] font-medium text-base'>
                members and counting
                </p>
            </li>
            <li className='space-y-2'>
                <h4 className='font-display text-[#FFFFFF] font-medium text-4xl'>
                12K+
                </h4>
                <p className='font-display text-[#FFFAE1] font-medium text-base'>
                active project
                </p>
            </li>
            <li className='space-y-2'>
                <h4 className='font-display text-[#FFFFFF] font-medium text-4xl'>
                85K+
                </h4>
                <p className='font-display text-[#FFFAE1] font-medium text-base'>
                active investors
                </p>
            </li>
        </ul>
    </div>
  )
}

export default EquitySharesSection;