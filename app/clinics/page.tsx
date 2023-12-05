"use client"
import React, {useEffect, useState} from 'react';
import HeadingText from "@/components/HeadingText";
import Input from "@/components/Input";
import {useClinicsQuery} from "@/redux/API/clinicsAPI";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    const {data} = useClinicsQuery({})

    return (
        <section className="max-container mb-[140px]">
            <HeadingText title="Клиники"/>
            <div className="mt-[47px]">
                <Input placeholder="Поиск клиники" w={834} h={50}/>
            </div>
            <div className="flex flex-col gap-[50px] mt-[50px]">
                {data?.map((clinic : any) => (
                    <Link href={clinic.id} className="h-[250px] w-full bg-[#ECF5FF] rounded-[15px] flex flex-row gap-[32px] p-[23px]">
                        <div className="flex flex-col gap-[19px]">
                            <Image src={clinic.logo} alt={clinic.name} width={160} height={80}/>
                            <div className="flex flex-row mt-[5px]">
                                {Array(5).fill(1).map((_,i) => <Image key={i} src="/Star.png" alt="star" width={15} height={15}/>)}
                                <p className="text-[#0A2036] text-[12px] font-normal ml-[1px]">{clinic.stars}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            <h1 className="text-[#0A2036] text-[30.5px] font-semibold">{clinic.name}</h1>
                            <p className="text-[#000] text-[16px] font-normal w-[636px]">{clinic.description}</p>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[2.46px]">
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/clock.png" alt="clock" width={16} height={18.733}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal">
                                        Время работы:<br/>
                                        {clinic.work_time}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/location.png" alt="clock" width={16} height={19.073}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal max-w-[265px]">
                                        Адрес:
                                        {clinic.address}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/phone.png" alt="clock" width={16} height={16.402}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal">
                                        Телефон:<br/>
                                        {clinic.tel_number}
                                    </p>
                                </div>
                            </div>
                            <Link href={clinic.id} className="px-[35px] py-[10px] rounded-[27px] bg-[#007BFF] text-[#fff] text-[16px] w-[157px] h-[40px] ml-[80px] flex justify-center items-center hover:bg-[#0664C2]">
                                Подробно
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Page;