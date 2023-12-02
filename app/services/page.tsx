"use client"
import React, {useEffect, useState} from 'react';
import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import MiscIcon from "@/components/MiscIcon";
import Link from "next/link";
import Input from "@/components/Input";
import {useServicesQuery} from "@/redux/API/serviceAPI";

type ServicesType = {
    id: string;
    label: string;
    icon: string;
}


const Page = () => {
    const {data} = useServicesQuery({})

    return (
        <section className="max-container mb-[140px]">
            <HeadingText title="Услуги"/>
            <div className=" mt-[47px]">
                <Input placeholder="Поиск услуги" w="834px" h="50px"/>
            </div>
            <div className="grid grid-cols-5 gap-[39px] mt-[64px]">
                {
                    data?.map((service: ServicesType) => (
                        <Link href={service.id} key={service.id}>
                            <div className="w-[210px] h-[125px] rounded-[15px] bg-[#ECF5FF] relative transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.001]">
                                <div className="absolute top-[20px] left-[20px]">
                                    <MiscIcon icon={service.icon} alt={service.label} />
                                </div>
                                <p className="absolute top-[84px] left-[20px] text-[#0A2036] text-[20px] font-semibold">{service.label}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </section>
    );
};

export default Page;