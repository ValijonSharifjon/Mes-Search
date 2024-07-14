import React from 'react';
import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import {INSTRUCTION, WE_OFFER} from "@/constants";
import MiscIcon from "@/components/MiscIcon";

const Page = () => {
    return (
        <section className="max-container">
            <HeadingText title="О нас" />
            <div className="flex flex-row gap-[43px]">
                <div>
                    <h1 className="text-[#007BFF] text-[30px] font-semibold w-[552px]">Ваш надежный сервис по поиску
                        врачей и бронированию приемов
                    </h1>
                    <p className="text-[#0A2036] text-[25px] font-normal w-[770px]">
                        Medsearch - это удобный инструмент для поиска и бронирования врачей. Мы помогаем пациентам найти нужного специалиста в своем районе и записаться на прием в удобное время.
                        На нашем сайте вы можете найти врачей по специальности, району и другим критериям. Вы также можете прочитать отзывы о врачах и посмотреть их фотографии.
                        Мы работаем с лучшими клиниками и врачами в Узбекистане. Все наши врачи имеют необходимые лицензии и сертификаты.
                    </p>
                </div>
                <div>
                    <Image src="/Rectangle.png" alt="Image" width={387} height={368}/>
                </div>
            </div>
            <div className="mt-[28px] flex flex-col gap-[29px]">
                <h1 className="text-[#007BFF] text-[30px] font-semibold flex justify-center">Что мы предлагаем</h1>
                <div className="flex gap-[149px]">
                    {WE_OFFER.map((offer) => (
                        <div key={offer.key} className="flex flex-col gap-[10px] w-[210px]">
                            <div className="w-[60.739px] h-[60.739px] rounded-full bg-[#007BFF] flex items-center justify-center p-3.5 hover:ring-2 hover:ring-blue-500">
                                <Image src={offer.icon} alt={offer.key} width={60.739} height={60.739}/>
                            </div>
                            <p className="text-[#0A2036] text-[25px] leading-6 font-normal">{offer.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[44.22px] flex flex-col gap-[29px]">
                <h1 className="text-[#007BFF] text-[30px] font-semibold flex justify-center">Как записаться на прием врача?</h1>
                <div className="flex gap-[65px]">
                    {
                        INSTRUCTION.map((inst) => (
                            <div key={inst.index} className="flex flex-col gap-[11px]">
                                <div className="w-[60.739px] h-[60.739px] rounded-full bg-[#007BFF] flex justify-center items-center">
                                    <p className="text-[#FFF] text-[30px] font-normal">{inst.index}</p>
                                </div>
                                <p className="text-[#0A2036] text-[25px] font-normal leading-7">{inst.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-[48.22px] flex flex-col gap-[29px]">
                <h1 className="text-[#007BFF] text-[30px] font-semibold flex justify-center">Связаться с нами</h1>
            </div>
        </section>
    );
};

export default Page;