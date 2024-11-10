import React from 'react';
import { features } from '@/data/features';
import Image from 'next/image';
import Link from 'next/link';
const Features = () => {

    return (
        <div className='pt-20'>
                {features.map((feature, index) => (
                    <div key={index} className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 rounded-lg mb-28">
                        <div className={`justify-stretch bg-[#E6E7E7] rounded-xl h-[424px] ${index % 2 === 0 ? "" :"lg:order-2"}`}/>
                        <div className={`2xl:w-2/3 flex flex-col gap-4`}>
                            <h3 className="font-display font-medium text-lg text-[#8F9395]">{feature.type}</h3>
                            <h3 className="font-display font-medium text-3xl exsmall:text-4xl text-[#0C303D]">{feature.title}</h3>
                            <p className="font-display font-medium text-base exsmall:text-lg text-[#47626c]">{feature.description}</p>
                            <ul className="space-y-2">
                                {feature.bulletPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Image src={"/Icons/TickIcon.png"} alt='Tick' width={20} height={20}/>
                                        <span className="text-[#314952] font-medium font-display text-base">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={feature.buttonLink}
                                className="w-fit inline-flex items-center font-display font-medium px-6 py-3 bg-[#0C303D] text-[#FFFFFF] rounded-full hover:bg-[#103745] transition-colors"
                            >
                                {feature.buttonText}
                                &nbsp;
                                <Image src={"/Icons/ArrowIcon.png"} alt='➜' width={16} height={12}/>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    )
}

const BenefitCard = ({ icon, title, description }: {
    icon: React.ReactNode, title: string, description: string
}) => (
    <div className="flex flex-col text-start gap-2">
        <div className="mb-4 text-blue-500">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ProductsSection = () => {

    return (
        <div className="min-h-screen bg-white w-full px-8 py-8 lg:px-12 xl:px-20">
            {/* Hero Section */}
            <div className="py-12">
                <div className='md:w-[706px] flex flex-col gap-4'>
                    <h2 className="text-4xl exsmall:text-5xl font-medium font-display text-[#0C303D]">
                        Everything you need to build, raise, and, tokenize.
                    </h2>
                    <p className="text-lg exsmall:text-xl font-medium font-display text-[#0C303D]" >
                        We enable people to invest in and benefit from real estate.
                        <br />
                        The investments offer financial returns and also help with
                        community development.
                    </p>
                </div>

                {/* Features Section */}
                <Features />
                {/* Benefits Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
                    <BenefitCard
                        icon={<CircleIcon />}
                        title="Premium Support"
                        description="We provide personalized support and assistance tailored to your needs throughout the process."
                    />
                    <BenefitCard
                        icon={<CircleIcon />}
                        title="No Minimum"
                        description="We provide personalized support and assistance tailored to your needs throughout the process."
                    />
                    <BenefitCard
                        icon={<CircleIcon />}
                        title="No Hidden Fees"
                        description="We provide personalized support and assistance tailored to your needs throughout the process."
                    />
                </div>
            </div>
        </div>
    );
};

// Simple circle icon component
const CircleIcon = () => (
    <Image src={"/Icons/FeatureIcon.png"} alt='FeatureIcon' width={30} height={30}/>
);

export default ProductsSection;