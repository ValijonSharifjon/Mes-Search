import React from 'react';
import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import {REVIEWS} from "@/constants";

const Reviews = () => {
    return (
        <section className="max-container flex flex-col gap-[36px] mt-[125px]">
            <HeadingText title="Отзывы"/>
            <div className="flex flex-row gap-[91px] justify-center">
                <div className="relative">
                    <div className="w-[203px] h-[203px] rounded-full border-[1px] border-[#007BFF]"/>
                    <div className="w-[143px] h-[143px] rounded-full border-[1px] border-[#007BFF] absolute top-[30px] left-[30px]"/>
                    <div className="w-[93px] h-[93px] rounded-full border-[1px] border-[#007BFF] absolute top-[55px] left-[55px]"/>
                    <div className="w-[48px] h-[48px] rounded-full bg-[#007BFF] absolute top-[78px] left-[78px]"/>
                    <Image src="/person1.png" alt="person1" width={45} height={45} className="absolute top-0 left-3"/>
                    <Image src="/person2.png" alt="person2" width={45} height={45} className="absolute bottom-[70px] left-4"/>
                    <Image src="/person3.png" alt="person3" width={45} height={45} className="absolute top-[55px] right-[-20px]"/>
                </div>
                <div>
                    <div className=" flex flex-col w-[500px] h-[250px] bg-[#ECF5FF] rounded-[15px]">
                        {REVIEWS.map((review) => (
                            <>
                                <div className="flex flex-row items-center gap-[7px] absolute mt-[24px] ml-[57px]">
                                    <Image src={review.icon} alt={review.full_name} width={55} height={55} className="rounded-full"/>
                                    <div>
                                        <h1 className="text-[#0A2036] text-[20px] font-semibold leading-6">{review.full_name}</h1>
                                        <p className="text-[#0A2036] text-[15px] font-normal leading-5">{review.location}</p>
                                    </div>
                                </div>
                                <p className="mt-[89px] ml-[37px] text-[#0A2036] text-[16px] font-medium leading-5 w-[433px]">{review.comment}</p>
                            </>
                        ))}
                    </div>
                    <div className="flex flex-row gap-[5px] justify-center mt-[15px]">
                        {Array(5).fill(1).map((_,i) => <div className="w-[9px] h-[9px] rounded-full bg-[#D9D9D9]"/>)}
                    </div>
                </div>
                <div className="relative">
                    <div className="w-[203px] h-[203px] rounded-full border-[1px] border-[#007BFF]"/>
                    <div className="w-[143px] h-[143px] rounded-full border-[1px] border-[#007BFF] absolute top-[30px] left-[30px]"/>
                    <div className="w-[93px] h-[93px] rounded-full border-[1px] border-[#007BFF] absolute top-[55px] left-[55px]"/>
                    <div className="w-[48px] h-[48px] rounded-full bg-[#007BFF] absolute top-[78px] left-[78px]"/>
                    <Image src="/person4.png" alt="person1" width={45} height={45}  className="absolute top-0 left-3"/>
                    <Image src="/person5.png" alt="person2" width={45} height={45} className="absolute bottom-[70px] left-4"/>
                    <Image src="/person6.png" alt="person3" width={45} height={45} className="absolute top-[55px] right-[-20px]"/>
                </div>
            </div>
        </section>
    );
};

export default Reviews;