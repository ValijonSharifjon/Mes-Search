"use client"
import React, {useEffect, useState} from 'react';
import HeadingText from "@/components/HeadingText";
import Link from "next/link";
import MiscIcon from "@/components/MiscIcon";
import {type} from "os";
import {Button} from "@mui/material";
import {useServicesQuery} from "@/redux/API/serviceAPI";

type ServicesType = {
    id: string;
    label: string;
    icon: string;
}
const Services = () => {
   const {data} = useServicesQuery({})

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
            <div className="flex justify-center">
                <Button variant="outlined" href="/services" size="large" style={{borderRadius: '25px',padding:'10px 32px'}}>
                    Ещё услуги
                </Button>
            </div>
        </section>
    );
};

export default Services;