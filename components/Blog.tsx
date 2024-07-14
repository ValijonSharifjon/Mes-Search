import React from 'react';
import HeadingText from "@/components/HeadingText";
import {NEWS} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

const Blog = () => {
    return (
        <section className="max-container flex flex-col mt-[125px] gap-[37px] h-[520px] mb-[118px]">
            <HeadingText title="Блог"/>
            <div className="flex flex-row gap-[39px]">
                {NEWS.map((n) => (
                    <Link href="/">
                        <div className="w-[270px] h-[335px] rounded-[15px] bg-[#ECF5FF] shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.001]">
                            <Image src={n.image} alt="image" width={270} height={200}/>
                            <p className="text-[#0A2036] text-[15px] font-normal mt-[17px] ml-[15px]">{n.date}</p>
                            <h1 className="text-[#0A2036] text-[20px] font-semibold ml-[15px] leading-6 max-w-[215px]">{n.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <Button variant="outlined" href="/" size="large" style={{borderRadius: '25px',padding:'10px 32px'}}>
                    Ещё новостей
                </Button>
            </div>
        </section>
    );
};

export default Blog;