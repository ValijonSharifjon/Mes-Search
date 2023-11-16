"use client"
import React, {useState} from 'react';
import Image from "next/image";



const WelcomePart = () => {
    const [isInputFocused, setInputFocused] = useState(false);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };


    return (
        <section className="bg-[#007BFF] h-[611px]">
            <div className="max-container flex gap-[6.19rem]">
                <div className="relative top-[7.44rem] flex flex-col gap-[1.56rem]">
                    <h1 className="text-[#FFF] text-[3.75rem] leading-[4.375rem] font-extrabold">Быстрое решение ваших
                        проблем со здоровьем</h1>
                    <form>
                        <div className="relative flex justify-between items-center text-[#007BFF]">
                            <input
                                type="text"
                                name="search"
                                placeholder="Врач,услуга,клиника"
                                autoComplete="off"
                                aria-label="Search talk"
                                className={`focus:outline-none focus:ring-2 focus:ring-[#00aaff] px-3 py-2  placeholder-[#007BFF]  rounded-[2.5rem]  w-[33.1875rem] h-[3.125rem] pl-[1.19rem]`}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <Image src='/SearchIcon.svg' alt='serch' width={20.293} height={20.707} className="absolute ml-3 left-[29.92rem]"/>
                        </div>
                    </form>
                </div>
                <Image src="/frame.png" alt="frame" width={423} height={414} className="relative top-[3.69rem]"/>
            </div>
        </section>
    );
};

export default WelcomePart;