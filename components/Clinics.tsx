import React from 'react';
import HeadingText from "@/components/HeadingText";
import {CLINICS} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const Clinics = () => {
    return (
        <section className="max-container h-[424px] mt-[125px] flex flex-col gap-[38px] justify-center">
            <HeadingText title="Клиники" />
            <div className="flex gap-[41px]">
                {CLINICS.map((clinic) => (
                    <Link href={clinic.href} key={clinic.key}>
                        <div className="w-[270px] h-[270px] rounded-[15px] bg-[#ECF5FF] flex flex-col shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.001]">
                            <div className="flex flex-col pl-[20px] pt-[15px]">
                                <div className="w-[138px] h-[64px] flex items-center">
                                    <Image src={clinic.logo} alt={clinic.key} width={clinic.width} height={clinic.height}/>
                                </div>
                                <div className="flex flex-row mt-[5px]">
                                    {Array(5).fill(1).map((_,i) => <Image key={i} src="/Star.png" alt="star" width={10} height={10}/>)}
                                    <p className="text-[#0A2036] text-[8px] font-normal ml-[1px]">{clinic.grade_quantity}</p>
                                </div>
                                <h1 className="text-[#0A2036] text-[20px] font-semibold">{clinic.name}</h1>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/clock.png" alt="clock" width={15} height={15}/>
                                    </div>
                                    <p className="mt-[3px] text-[#0A2036] text-[12px] font-normal">
                                        Время работы:<br/>
                                        {clinic.working_hours}</p>
                                </div>
                                <div className="flex flex-row gap-[4px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/location.png" alt="clock" width={21} height={21}/>
                                    </div>
                                    <p className="mt-[3px] text-[#0A2036] text-[12px] font-normal">
                                        Адрес:
                                        {clinic.address}</p>
                                </div>
                                <div className="flex flex-row gap-[5px] ">
                                    <div className="mt-[6px]">
                                        <Image src="/phone.png" alt="clock" width={12} height={15}/>
                                    </div>
                                    <p className="mt-[3px] text-[#0A2036] text-[12px] font-normal">
                                        Телефон:<br/>
                                        {clinic.tel}</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Link href='/' className="dodger-blue underline text-[11.688px] font-normal ">Подробно</Link>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
            <Link href="/clinics" className="flex justify-center">
                <Button type="button" title="Eщё клиники" variant="btn_dark_green_outline" textSize="20" fontWeight="font-normal" h="45px" w="205px"/>
            </Link>
        </section>
    );
};

export default Clinics;