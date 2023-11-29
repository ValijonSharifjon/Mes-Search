
import React, {useRef} from 'react';
import Image from "next/image";

type InputType = {
    placeholder: string;
    w: string;
    h: string;
}
const Input = ({placeholder,w,h}:InputType) => {
    const ref = useRef<any>(null)

    return (
        <div className="relative flex justify-center text-[#007BFF]">
            <input
                type="text"
                name="search"
                placeholder={placeholder}
                className={`focus:outline-none focus:ring-2 focus:ring-[#00aaff] px-[12px] py-[18px]  placeholder-[#007BFF] bg-[#ECF5FF] rounded-[40px]  w-[${w}] h-[${h}] pl-[1.19rem]`}
            />
            <Image src='/SearchIcon.svg' alt='serch' width={20.293} height={20.707} className="absolute top-[14px] right-[13rem]"/>
        </div>
    );
};

export default Input;