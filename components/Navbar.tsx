"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from '@mui/material/Button';
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsNavbarFixed(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const buttonStyle = {
        borderRadius: 22,
        color: 'white',
        backgroundColor: '#007BFF',
        '&:hover': {
            backgroundColor: '#0664C2',
        },
        padding: '10px 15px',
    };

    const pathname = usePathname()
    return (
       <nav className={`${isNavbarFixed ? 'fixed' : ''} bg-[#fff] z-30 h-[89px] w-full`}>
           <div className="flexBetween max-container flex py-[0.375rem]">
               <Link href="/">
                   <Image src="/logo.jpg" alt="logo" height={29} width={74}/>
               </Link>
               <ul className="flex gap-[30px]">
                   {NAV_LINKS.map((link) => (
                       <Link href={link.href} key={link.key} className={`${pathname === link.href ? 'text-[#007BFF]' : 'text-[#0A2036] '} text-sm not-italic font-medium hover:text-[#007BFF]`}>
                           {link.label}
                       </Link>
                   ))}
               </ul>
               <div className="flex gap-[1.46rem] items-center">
                   <div>
                       <Image src="/ru.svg" alt="language" width={22.88} height={22.88} className="rounded-full"/>
                   </div>
                   <Link href="/" className="black hover:text-[#007BFF]">
                       Войти
                   </Link>
                   <Button variant="contained" href="/" style={buttonStyle} color="primary" size="medium">Регистрация</Button>
               </div>
           </div>
       </nav>
    );
};

export default Navbar;