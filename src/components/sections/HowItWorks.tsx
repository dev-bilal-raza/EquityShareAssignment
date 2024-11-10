"use client"
import React, { useState } from 'react';
import { work_steps } from '@/data/work_steps';
import Image from 'next/image';
import Link from 'next/link';

const HowItWorksSection = () => {
    const [steps, setSteps] = useState(work_steps);
    const steps_handler = (step_id: number) => {
        const updatedSteps = steps.map(step => {
            if (step.id === step_id) {
                return {
                    ...step,
                    isActive: !step.isActive
                }
            } else {
                return {
                    ...step,
                    isActive: false
                }
            }
        })
        setSteps(updatedSteps)
    }
    return (
        <div className="px-8 py-8 lg:px-12 xl:px-20 pt-24">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-display text-base font-medium text-[#8F9395] text-center">How it works</p>
                <h1 className="font-display text-4xl sm:text-5xl font-medium text-[#0C303D] text-center">
                    Invest with clarity and confidence
                </h1>
                <p className="font-display text-lg sm:text-xl font-medium text-[#0C303D] md:w-[671px] text-center">
                    Whether you&apos;re experienced in investing or new to it, our platform
                    simplifies and opens up investment opportunities for you.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 my-20">
                <div>
                    {
                        steps.map((step, index) => (
                            <div key={index} className="flex gap-3 py-4 cursor-pointer" onClick={() => steps_handler(step.id)}>
                                <div className={`w-1 ${step.isActive ? "duration-500 transition-colors bg-[#00AEEF]" : "bg-[#E6E7E7]"} rounded-sm`} />
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-display text-xl font-semibold text-[#0C303D]">{step.title}</h4>
                                    <p className="font-display text-lg font-medium text-[#314952]">{step.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    <Link
                        href={"/"}
                        className="w-fit inline-flex items-center font-display font-medium px-6 py-3 bg-[#0C303D] text-[#FFFFFF] rounded-full hover:bg-[#103745] transition-colors mt-2"
                    >
                        Get Started
                        &nbsp;
                        <Image src={"/Icons/ArrowIcon.png"} alt='➜' width={16} height={12} />
                    </Link>
                </div>
                {/* Right Column - We are showing an image of active step */}
                <div className="bg-gray-100 rounded-lg min-h-[500px]">
                    {
                        steps.map((step, index) => (
                            step.isActive && (
                                step.image ? (
                                    <Image key={index} src={step.image} alt={step.title} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <div key={index} />
                                )
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;