import React from 'react';
import {WE_OFFER} from "@/constants";
import Image from "next/image";
import HeadingText from "@/components/HeadingText";
import MiscIcon from "@/components/MiscIcon";

const AboutUs = () => {
    return (
        <section className="max-container  h-[400px] mt-[135px] flex flex-col gap-[28px]">
            <HeadingText title="О нас"/>
            <div className="flex flex-row gap-[132px]">
                <div className="w-[456px] flex flex-col gap-[14px]">
                    <h2 className="text-[#007BFF] text-[30px] font-semibold leading-[34px]">Что мы предлагаем:</h2>
                    <div className="grid grid-cols-2 gap-x-[112px] gap-y-[16px]">
                        {WE_OFFER.map((offer) => (
                            <div key={offer.key} className=" w-[171px] h-[115px] flex flex-col gap-1.5">
                               <MiscIcon icon={offer.icon} alt={offer.key}/>
                                <p className="text-[#0A2036] text-[20px] font-['Inter']  leading-6">{offer.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] w-[594px]">
                    <h2 className="text-[#007BFF] text-[30px] font-semibold leading-[34px]">Ваш надежный сервис по поиску
                        врачей и бронированию приемов</h2>
                    <p className="text-[#0A2036] text-[25px] font-['Inter'] leading-8">Добро пожаловать на наш медицинский сервис,
                        где ваше здоровье и удобство нашей первостепенной заботой.
                        Мы посвятили себя созданию простого и эффективного способа для вас найти опытных врачей и специалистов здравоохранения,
                        а также быстро и легко записаться на прием
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;