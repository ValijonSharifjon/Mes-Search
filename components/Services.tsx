"use client"
import React, {useEffect, useState} from 'react';
import HeadingText from "@/components/HeadingText";
import Link from "next/link";
import MiscIcon from "@/components/MiscIcon";
import Button from "@/components/Button";
import {type} from "os";

type ServicesType = {
    id: string;
    label: string;
    icon: string;
}
const Services = () => {
    const [data,setData] = useState<any>(null)
    useEffect(() => {
        const fetchData = async () => {
           try {
               const response = await fetch('http://localhost:3001/services')
               const jsonData = await response.json()
               setData(jsonData)
           } catch (error) {
               throw new Error('Failed to fetch data')
           }
        }
        fetchData()
    },[])

    return (
        <section className="max-container h-[316px] mt-[124px] flex flex-col gap-[43px]">
            <HeadingText title="Услуги"/>
            <div className="flex gap-[50px]">
                {data?.slice(0,5).map((service: ServicesType) => (
                    <Link href="/" key={service.id}>
                        <div className="w-[200px] h-[125px] rounded-[15px] bg-[#ECF5FF] flex flex-col relative  transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.001]">
                            <div className="absolute top-[20px] left-[20px] group-hover:ring-2 group-hover:ring-blue-500">
                                <MiscIcon icon={service.icon} alt={service.label} />
                            </div>
                            <p className="absolute top-[84px] left-[20px] text-[#0A2036] text-[20px] font-semibold">{service.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href="/services" className="flex justify-center">
                <Button type="button" title="Ещё услуги" variant="btn_dark_green_outline" textSize="20" fontWeight="font-normal" h="45px" w="183px"/>
            </Link>
        </section>
    );
};

export default Services;