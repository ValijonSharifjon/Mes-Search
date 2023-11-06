import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

const Navbar = () => {
    return (
       <nav className="flexBetween max-container relative  py-[0.375rem] max-h-[89px]">
           <Link href="/">
               <Image src="/logo.jpg" alt="logo" height={29} width={74}/>
           </Link>
           <ul className="flex gap-[1.88rem]">
               {NAV_LINKS.map((link) => (
                   <Link href={link.href} key={link.key} className="text-[#0A2036]  text-sm not-italic font-medium hover:text-[#007BFF]">
                       {link.label}
                   </Link>
               ))}
           </ul>
           <div className="flex gap-[1.46rem] items-center">
               <div>
                   <Image src="/ru.svg" alt="language" width={22.88} height={22.88} className="rounded-full"/>
               </div>
               <Link href="/" className="black">
                   Войти
               </Link>
               <Button type="button" title="Регистрация " variant="btn_dark_yellow"/>
           </div>
       </nav>
    );
};

export default Navbar;