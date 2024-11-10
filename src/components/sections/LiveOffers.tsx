import React from 'react';
import Image from 'next/image';
import { live_offers as offerings } from '@/data/live_offers';
import Link from 'next/link';

const LiveOfferingSection = () => {
    return (
        <section className="w-full px-8 py-8 lg:px-12 xl:px-20 mt-14 bg-gradient-to-b from-white via-gray-100 via-50% to-white">
            {/* Header */}
            <div className="flex exsmall:flex-row flex-col gap-3 items-center justify-between mb-6">
                <h3 className="text-4xl font-display font-medium text-[#0C303D]">Live Offerings</h3>
                <Link href="#" className="text-[#7F8385] font-display font-medium text-sm hover:text-[#626567] flex items-center">
                    Explore Investments
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            {/* Grid of offerings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
                {offerings.map((offer, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden p-4 border lg:mb-20">
                        {/* Image container with relative positioning for status badge */}
                        <div className="relative">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-full object-cover rounded-xl"
                                width={400}
                                height={400}
                            />
                            <span
                                className="absolute top-3 left-3 px-3 py-1 text-sm rounded-md"
                                style={{
                                    backgroundColor: offer.status.bgColor,
                                    color: offer.status.color
                                }}
                            >
                                {offer.status.type}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="my-6">
                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">{offer.location}</p>

                            {/* Title */}
                            <h3 className="text-lg font-display font-semibold mb-2">{offer.title}</h3>

                            {/* Description */}
                            <p className="text-sm font-display font-medium text-[#64696B] mb-4">{offer.description}</p>

                            {/* Price and Days Left */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-display font-medium text-[#0C303D]">${offer.price} raised</span>
                                <span className="text-sm font-display font-medium text-[#7F8385]">{offer.leftDays} days left</span>
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2">
                                {offer.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-display font-medium text-[#0C303D] ${tagIndex % 2 ===0 ? "bg-[#FFEEFF]": "bg-[#FFFAE1]"}`}
                                    >
                                        {tag.tagIcon && (
                                            <Image
                                                src={tag.tagIcon}
                                                alt={tag.tagName}
                                                className="w-4 h-4 mr-1"
                                                width={16}
                                                height={16}
                                            />
                                        )}
                                        {tag.tagName}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiveOfferingSection;