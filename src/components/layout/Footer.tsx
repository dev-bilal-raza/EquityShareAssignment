"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { social_links } from '@/data/social_links'
import { nav_links } from '@/data/links'
import Disclaimer from '../sections/Disclaimer'

const Footer = () => {
    const [links, setLinks] = useState(nav_links);
    const linkHandler = (link_id: number) => {
        const updatedLinks = links.map(link => {
            if (link.id === link_id) {
                return {
                    ...link,
                    isShowed: !link.isShowed
                }
            }
            return link
        })
        setLinks(updatedLinks)
    }
    return (
        <footer className='px-8 pt-8 lg:px-12 xl:px-20 py-6 bg-[#F8F8F9]'>
            <div>
                <div className='flex exsmall:flex-row flex-col justify-between exsmall:items-center gap-4'>
                    <div className='flex gap-16 items-center'>
                        <Image src={"/logo-black.png"} alt='Equity Share' width={180} height={141} />
                        <div className='space-x-7 lg:block hidden'>
                            <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>About Us</Link>
                            <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Carrers</Link>
                            <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Press</Link>
                            <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>News</Link>
                            <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-10 my-4'>
                            {social_links.map((social, index) => (
                                <Link key={index} href={social.url}>
                                    <Image src={social.icon} alt={social.name} width={28} height={28} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col gap-7 lg:hidden mt-4'>
                    <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>About Us</Link>
                    <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Carrers</Link>
                    <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Press</Link>
                    <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>News</Link>
                    <Link className='font-medium font-display text-[#7F8385] text-lg' href={"/"}>Contact</Link>
                </div>
            </div>
            <div className='h-0.5 w-full bg-[#E6E7E7] my-10' />
            <div>
                {/* Footer Links */}
                <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
                    {links.map((link, index) => (
                        <div key={index} className="relative mb-4">
                            <h4 className="font-medium text-lg text-[#0C303D]">{link.name}</h4>

                            <div className={`transition-all duration-300 ease-in-out ${link.isShowed ? 'max-h-[500px]       opacity-100' : 'max-h-0 opacity-0 lg:max-h-[500px] lg:opacity-100'} overflow-hidden`}
                            >
                                <ul className={`mt-4 space-y-2 ${link.isShowed ? "lg:pl-0 pl-3" : "lg:pl-0"}`}>
                                    {link.subLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.url}
                                                className="font-medium text-base text-[#7F8385] hover:text-[#0C303D] transition-colors duration-200"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div
                                className="lg:hidden block absolute right-0 top-0 cursor-pointer"
                                onClick={() => linkHandler(link.id)}
                            >
                                <svg
                                    className={`w-5 transform transition-transform duration-300 ease-in-out ${link.isShowed ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                    <div className="lg:block hidden col-span-2 bg-[#E4DDCF] p-6 rounded-lg xl:mb-12 sm:h-[150px]">
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
                <div className='flex 2xl:flex-row flex-col justify-between py-10 gap-8'>
                    <div className='flex sm:flex-row flex-col gap-8'>
                        <Link className='font-display text-base font-medium text-[#7F8385]' href={"/"}>Terms</Link>
                        <Link className='font-display text-base font-medium text-[#7F8385]' href={"/"}>Privacy</Link>
                        <Link className='font-display text-base font-medium text-[#7F8385]' href={"/"}>Disclosure</Link>
                        <Link className='font-display text-base font-medium text-[#7F8385]' href={"/"}>Cookies</Link>
                        <h3 className='font-display text-base font-medium text-[#7F8385]'>
                            © 2024 EquityShare Portal LLC
                        </h3>
                    </div>
                    <div className='flex sm:flex-row flex-col gap-6 text-[#7F8385] font-medium font-display text-base'>
                        <div className='flex gap-1'>
                            <Image src={"/Icons/PhoneIcon.png"} alt='Phone' width={20} height={20} />
                            <h3 className='sm:text-nowrap'>747.900.1387</h3>
                        </div>
                        <div className='flex gap-1'>
                            <Image className='' src={"/Icons/emailIcon.png"} alt='Email' width={20} height={20} />
                            <Link href={"mailto:reach@equityshare.ai"} className='sm:text-nowrap'>reach@equityshare.ai</Link>
                        </div>
                        <div className='flex gap-1'>
                            <Image src={"/Icons/locationIcon.png"} alt='Location' width={20} height={20} />
                            <h3 className='sm:text-nowrap'>333 City Blvd W, Orange, CA 92868</h3>
                        </div>
                    </div>
                </div>
                <div className='h-0.5 w-full bg-[#E6E7E7] my-10' />
                <Disclaimer />
            </div>
        </footer>
    )
}

export default Footer