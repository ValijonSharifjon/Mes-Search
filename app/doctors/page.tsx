"use client"
import React from 'react';
import HeadingText from "@/components/HeadingText";
import Input from "@/components/Input";
import {useDoctorsQuery} from "@/redux/API/doctorsAPI";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    const {data} = useDoctorsQuery({})
    return (
        <section className="max-container mb-[140px]" >
            <HeadingText title="Докторы"/>
            <div className=" mt-[47px]">
                <Input placeholder="Поиск услуги"/>
            </div>
            <div className="flex flex-col gap-[50px] mt-[50px]">
                {data?.map((doctor : any) => (
                    <Link href={doctor.id} className="h-[250px] w-full bg-[#ECF5FF] rounded-[15px] flex flex-row gap-[32px] p-[23px]">
                        <div className="flex flex-col gap-[19px]">
                            <Image src={doctor.img} alt={doctor.name} width={162} height={153}/>
                            <div className="flex flex-row mt-[5px]">
                                {Array(5).fill(1).map((_,i) => <Image key={i} src="/Star.png" alt="star" width={15} height={15}/>)}
                                <p className="text-[#0A2036] text-[12px] font-normal ml-[1px]">{doctor.stars}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[1px]">
                            <h1 className="text-[#0A2036] text-[30.5px] font-semibold leading-6">{doctor.name}</h1>
                            <p className="text-[#0A2036] text-[15px] font-light">{doctor.specialization}</p>
                            <p className="text-[#000] text-[16px] font-normal w-[636px]">{doctor.description}</p>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex flex-col gap-[2.46px]">
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/workPlace.png" alt="clock" width={16} height={18.733}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal">
                                        Место работы:<br/>
                                        {doctor.work_place}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/clock.png" alt="clock" width={16} height={19.073}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal max-w-[265px]">
                                        Время работы:
                                        {doctor.work_time}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/location.png" alt="clock" width={16} height={16.402}/>
                                    </div>
                                    <p className="mt-[2px] text-[#0A2036] text-[16px] font-normal">
                                        Адрес:<br/>
                                        {doctor.address}
                                    </p>
                                </div>
                            </div>
                            <Link href={doctor.id} className="px-[35px] py-[10px] rounded-[27px] bg-[#007BFF] text-[#fff] text-[16px] w-[213px] h-[40px] ml-[80px] flex justify-center items-center hover:bg-[#0664C2]">
                                Записаться на врача
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Page;