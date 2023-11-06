import React from 'react';
import HeadingText from "@/components/HeadingText";
import {SERVICES} from "@/constants";
import Link from "next/link";
import MiscIcon from "@/components/MiscIcon";

const Services = () => {
    return (
        <section className="max-container h-[316px] mt-[124px] flex flex-col gap-[43px]">
            <HeadingText title="Услуги"/>
            <div className="flex gap-[50px]">
                {SERVICES.map((service) => (
                    <Link href="/" key={service.key}>
                        <div className="w-[200px] h-[125px] rounded-[15px] bg-[#ECF5FF] flex flex-col relative">
                            <div className="absolute top-[20px] left-[20px]">
                                <MiscIcon icon={service.icon} alt={service.key} />
                            </div>
                            <p className="absolute top-[84px] left-[20px] text-[#0A2036] text-[20px] font-semibold ">{service.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <Link href="/" className="flex justify-center text-[#007BFF] text-[25px] font-normal underline">
                Eщё услуги
            </Link>
        </section>
    );
};

export default Services;