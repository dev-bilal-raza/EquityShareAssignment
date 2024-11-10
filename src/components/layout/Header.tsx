"use client"
import React, { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBackground, setNavBackground] = useState<boolean>(false);
    // Use useLayoutEffect for scroll handling
    useLayoutEffect(() => {
        const changeBackground = () => {
            setNavBackground(window.scrollY >= 50);
        };

        // Set initial state
        changeBackground();
        
        window.addEventListener("scroll", changeBackground);
        return () => window.removeEventListener("scroll", changeBackground);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`text-white w-full fixed z-30 top-0 px-4 md:px-12 xl:px-20 py-3 ${navBackground ? "duration-300 bg-black" : "duration-500 bg-transparent"}`}>
            <div className=''>
                <div className='flex justify-between items-center'>
                    {/* Logo and Desktop Navigation */}
                    <div className='flex items-center gap-9'>
                        <Image src="/logo.png" alt='EquityShare' width={141} height={141} />
                        <nav className='hidden lg:block'>
                            <ul className='flex justify-center items-center gap-3'>
                                <li className='font-display text-base font-medium px-4 py-2'>
                                    <Link href="/">Invest</Link>
                                </li>
                                <li className='font-display text-base font-medium px-4 py-2'>
                                    <Link href="/">Raise</Link>
                                </li>
                                <li className='font-display text-base font-medium px-4 py-2'>
                                    <button className='flex gap-2 items-end group'>
                                        <h5>Tokenize</h5>
                                        <svg
                                            className="w-5 transform transition-transform duration-200 group-hover:-rotate-180"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className='font-display text-base font-medium px-4 py-2'>
                                    <Link href="/">Resources</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Desktop Buttons */}
                    <div className='hidden lg:flex gap-2'>
                        <button className='bg-transparent border border-[#FFFFFF] px-4 py-2 rounded-full'>
                            Sign In
                        </button>
                        <button className='bg-[#E0F7FF] px-4 py-2 rounded-full text-[#001C3D]'>
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className='lg:hidden p-2 focus:outline-none'
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-full left-0 right-0 bg-[#001C3D] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                >
                    <nav className='px-20 py-5'>
                        <ul className='flex flex-col gap-4 justify-start items-center'>
                            <li className='font-display text-base font-medium'>
                                <Link href="/" className='block py-2'>Invest</Link>
                            </li>
                            <li className='font-display text-base font-medium'>
                                <Link href="/" className='block py-2'>Raise</Link>
                            </li>
                            <li className='font-display text-base font-medium'>
                                <button className='flex gap-2 items-center w-full py-2'>
                                    <span>Tokenize</span>
                                    <svg
                                        className="w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            </li>
                            <li className='font-display text-base font-medium'>
                                <Link href="/" className='block py-2'>Resources</Link>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-3'>
                            <button className='w-full bg-transparent border border-white px-4 py-2 rounded-full'>
                                Sign In
                            </button>
                            <button className='bg-[#E0F7FF] px-4 py-2 rounded-full text-[#001C3D]'>
                                Get Started
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;