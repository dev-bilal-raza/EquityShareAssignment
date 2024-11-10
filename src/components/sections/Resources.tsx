import React from 'react';
import { resources } from '@/data/resource';
import Image from 'next/image';
import Link from 'next/link';

const ResourcesSection = () => {

  return (
    <div className="px-8 pt-8 pb-12 lg:px-12 xl:px-20 bg-[#F8F8F9]">
      <div className='flex xl:flex-row flex-col gap-10 pt-20'>
        <div className='xl:pr-20 flex xl:flex-col gap-10 lg:flex-row flex-col xl:items-stretch lg:items-center items-stretch justify-between xl:justify-start'>
          <div className="mb-8 sm:w-[400px]">
            <p className="text-[#8F9395] mb-2">Resources</p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium mb-4 text-[#0C303D]">Helpful Resources</h2>
            <p className="text-[#0C303D] font-display font-medium text-xl mb-6">
              No matter your specific needs, we have the right level of support and expertise to meet them.
            </p>
            <Link href="#" className="w-fit text-[#7F8385] font-medium text-base inline-flex items-center">
              Explore our resource center ➜
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-[#E4DDCF] p-6 rounded-lg xl:mb-12 sm:h-[150px]">
            <h3 className="mb-4 text-[#0C303D] text-base font-display font-medium">Get fresh investment insights, weekly</h3>
            <div className="flex  rounded-lg gap-2 bg-[#FFFFFF] border-[#FFFFFF] p-1 pl-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent flex-1 w-0 sm:w-full border-none outline-none"
              />
              <button className="bg-[#0C303D] text-[#FFFFFF] font-display text-base p-2 sm:p-4 rounded-lg hover:bg-[#103745]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 xl:pl-10">
          {resources.map((resource, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={400}
                  height={400}
                  className="w-full min-h-[246px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-base text-[#8F9395] mb-2">{resource.category}</p>
                <h3 className="text-xl font-medium mb-2 text-[#0C303D]">
                  {resource.title}
                </h3>
                <div className="flex items-center text-sm text-[#8F9395]">
                  <span>{resource.type}</span>
                  <span className="mx-2">·</span>
                  <span>{resource.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;