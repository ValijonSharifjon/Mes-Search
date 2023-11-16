import React from 'react';
import {FOOTER_LINKS} from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#0A2036] h-[474px] mt-[149px] flex  flex-col gap-[41px]">
            <div className="h-[303px] max-container flex flex-row gap-[89px] mt-[89px]">
                <div className="flex flex-col gap-[17px] ">
                    <div className="w-[183px] h-[55px] bg-[#fff]"/>
                    <p className="text-[15px] text-[#FFF] font-normal w-[264px] leading-[21px]">
                        Находите врача, записывайтесь легко.
                        Преимущества: высокие стандарты, удобный поиск, технологический комфорт.
                        Присоединяйтесь к новому уровню заботы о здоровье!
                    </p>
                    <div className="flex flex-col gap-[36px]">
                        <div className="flex flex-row gap-[36px]">
                            <div className="w-[46px] h-[46px] rounded-full bg-[#fff] p-2">
                                <Image src="/instagram.png" alt="instagram" width={46} height={46}/>
                            </div>
                            <div className="w-[46px] h-[46px] rounded-full bg-[#fff] p-2.5">
                                <Image src="/linkedin.png" alt="instagram" width={46} height={46}/>
                            </div>
                            <div className="w-[46px] h-[46px] rounded-full bg-[#fff] p-2">
                                <Image src="/telegram.png" alt="instagram" width={46} height={46}/>
                            </div>
                            <div className="w-[46px] h-[46px] rounded-full bg-[#fff] p-2">
                                <Image src="/facebook.png" alt="instagram" width={46} height={46}/>
                            </div>
                        </div>
                    </div>
                </div>
                {FOOTER_LINKS.map((column) => (
                    <FooterColumn title={column.title} href={column.href}>
                        <ul className="flex flex-col gap-[25px]">
                            {column.links.map((link) => (
                                <Link href={link.href} className="text-[20px] text-[#FFF] font-normal hover:underline leading-6">
                                    {link.name}
                                </Link>
                            ))}
                        </ul>
                    </FooterColumn>
                ))}
                <FooterColumn title="Связаться с нами" href="/">
                    <h4 className="text-[20px] text-[#FFF] font-normal leading-6">+998 99 436 82 55</h4>
                    <h4 className="text-[20px] text-[#FFF] font-normal leading-6">medsearch@medical.com</h4>
                </FooterColumn>
            </div>
            <div className="flex flex-col gap-[13px] items-center">
                <div className="w-[1037px] h-[1px] bg-[#fff]"/>
                <div className="w-[1037px] flex justify-between">
                    <p className="text-[20px] text-[#FFF] font-normal">&copy; Medsearch 2023</p>
                    <p className="text-[20px] text-[#FFF] font-normal">Design by Ismoil Gofurov</p>
                </div>
            </div>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    children: React.ReactNode,
    href: string;
}
const FooterColumn = ({title,children,href}: FooterColumnProps) =>{
return (
    <div className="flex flex-col gap-[19px]">
       <Link href={href}>
           <h4 className="text-[25px] text-[#FFF] font-semibold">{title}</h4>
       </Link>
        {children}
    </div>
)
}

export default Footer;