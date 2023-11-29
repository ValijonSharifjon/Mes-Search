import React from 'react';
import HeadingText from "@/components/HeadingText";
import {DOCTORS} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const Doctors = () => {
    return (
       <section className="max-container h-[515px] mt-[131px] flex flex-col gap-[43px]">
           <HeadingText title="Докторы"/>
           <div className="flex gap-[39px]">
               {DOCTORS.map((doctor) => (
                   <Link href="/" key={doctor.name} >
                       <div className="w-[270px] h-[335px] rounded-[15px] shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.001]">
                           <div>
                               <Image src={doctor.image} alt="image" width={270} height={260}/>
                           </div>
                           <div className="bg-[#ECF5FF] pl-[19px] pt-[10px] rounded-b-[15px] h-[90px]">
                               <h1 className="text-[#0A2036] text-[20px] font-semibold leading-[25px]">{doctor.name}</h1>
                               <p className="text-[#0A2036]  text-[15px] font-normal leading-[20px]">{doctor.specialization}</p>
                               <div  className="flex flex-row mt-[5px]">
                                   {Array(5).fill(1).map((_,i) => <Image key={i} src="/Star.png" alt="star" width={13} height={13}/>)}
                                   <p className="text-[#0A2036] text-[10.4px] font-normal ml-[1px]">{doctor.grade_quantity}</p>
                               </div>
                           </div>
                       </div>
                   </Link>
               ))}
           </div>
           <Link href="/doctors" className="flex justify-center">
               <Button type="button" title="Еще докторы" variant="btn_dark_green_outline" textSize="20" fontWeight="font-normal" h="45px" w="202px"/>
           </Link>
       </section>
    );
};

export default Doctors;